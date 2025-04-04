using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using marmitariaLeozitos.Data;
using marmitariaLeozitos.Models;

namespace marmitariaLeozitos.Controllers
{
    [ApiController]
    [Route("api/")]
    public class MarmitariaController : ControllerBase 
    {
        private readonly AppDbContext _appDbContext;

        public MarmitariaController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("buscar-todas-marmitas")]
        public async Task<IActionResult> GetMarmitas()
        {
            var marmitas = await _appDbContext.Marmita.ToListAsync();
            return Ok(marmitas);
        }

        [HttpGet("buscar-marmita/{id}")]
        public async Task<IActionResult> GetMarmita(int id)
        {
            var marmita = await _appDbContext.Marmita.FindAsync(id);
            if (marmita == null)
            {
                return NotFound("Marmita não encontrada.");
            }
            return Ok(marmita);
        }

        [HttpPost("criar-marmita")]
        public async Task<IActionResult> AddMarmita(Marmita marmita)
        {
            if (marmita == null) 
            {
                return BadRequest("Dados inválidos.");
            }

            _appDbContext.Marmita.Add(marmita);
            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, marmita);
        }

        [HttpPut("alterar-marmita/{id}")]
        public async Task<IActionResult> UpdateMarmita(int id, Marmita marmita)
        {
            if (marmita == null || marmita.Id != id)
            {
                return BadRequest("Dados inválidos.");
            }

            var marmitaExistente = await _appDbContext.Marmita.FindAsync(id);
            if (marmitaExistente == null)
            {
                return NotFound("Marmita não encontrada.");
            }

            marmitaExistente.Descricao = marmita.Descricao;
            marmitaExistente.Valor = marmita.Valor;

            _appDbContext.Marmita.Update(marmitaExistente);
            await _appDbContext.SaveChangesAsync();

            return Ok(marmitaExistente);
        }

        //Remover esse método da futuramente, coloquei ele pra facilitar os testes limpando a database
        //Apaga todas as marmitas que tem alg info vazia
        [HttpDelete("apagar-todas-marmitas")]
        public async Task<IActionResult> DeleteAllMarmita()
        {
            var marmitas = await _appDbContext.Marmita.ToListAsync();
            var count = 0;

            foreach (var marmita in marmitas)
            {
                if(marmita.Descricao == null || marmita.Valor == null)
                {
                    _appDbContext.Marmita.Remove(marmita);
                    count++;
                }
            }
            
            string retorno = (count > 0 && count != 1) ? count + " marmitas foram removidas com sucesso!" : "Nenhuma marmita foi removida";
            await _appDbContext.SaveChangesAsync();
            return Ok(retorno);
        }

        [HttpDelete("apagar-marmita/{id}")]
        public async Task<IActionResult> DeleteMarmita(int id)
        {
            var marmita = await _appDbContext.Marmita.FindAsync(id);
            if (marmita == null)
            {
                return NotFound("Marmita não encontrada.");
            }

            _appDbContext.Marmita.Remove(marmita);
            await _appDbContext.SaveChangesAsync();

            return Ok("Marmita removida com sucesso.");
        }
    }
}
