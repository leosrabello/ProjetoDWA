using Microsoft.AspNetCore.Mvc;
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

     }
}