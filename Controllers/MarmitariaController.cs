using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using marmitariaLeozitos.Data;
using marmitariaLeozitos.Models;

namespace marmitariaLeozitos.Controllers
{
    [ApiController] // Indica que esta classe é um controlador de API.
    [Route("api/[controller]")] // Define a rota base para as requisições HTTP. O "[controller]" será substituído pelo nome da classe sem o sufixo "Controller".
    public class MarmitariaController : ControllerBase 
    {
        private readonly AppDbContext _appDbContext; // Declaração de uma variável para acessar o banco de dados.

        // Construtor que recebe uma instância de AppDbContext por injeção de dependência.
        public MarmitariaController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetMarmitas()
        {
            var marmitas = await _appDbContext.Marmita.ToListAsync();
            return Ok(marmitas);
        }

                [HttpGet("{id}")]
        public async Task<IActionResult> GetMarmita(int id)
        {
            var marmita = await _appDbContext.Marmita.FindAsync(id);
            if (marmita == null)
            {
                return NotFound("Marmita não encontrada.");
            }
            return Ok(marmita);
        }

        [HttpPost]
          public async Task<IActionResult> AddMarmita(Marmita marmita)
        {
            if (marmita == null) {
                return BadRequest("Dados inválidos.");
            }

            _appDbContext.Marmita.Add(marmita);
            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, marmita);
        }

[HttpPut("{id}")]
public async Task<IActionResult> UpdateMarmita(int id, Marmita marmita)
{
    if (marmita == null || marmita.Id != id)
    {
        return BadRequest("Dados inválidos.");
    }

    // Busca a marmita existente no banco de dados
    var marmitaExistente = await _appDbContext.Marmita.FindAsync(id);
    if (marmitaExistente == null)
    {
        return NotFound("Marmita não encontrada.");
    }

    // Atualize os campos conforme necessário. Exemplo:
    marmitaExistente.Descricao = marmita.Descricao;
    marmitaExistente.Valor = marmita.Valor;
    // Se houver outros campos, atualize-os aqui

    // Aplica as alterações e salva
    _appDbContext.Marmita.Update(marmitaExistente);
    await _appDbContext.SaveChangesAsync();

    return Ok(marmitaExistente);
}

        [HttpDelete("{id}")]
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