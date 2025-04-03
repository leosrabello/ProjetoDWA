using Microsoft.EntityFrameworkCore; // Importa a biblioteca do Entity Framework Core, que permite trabalhar com banco de dados de forma orientada a objetos.
using marmitariaLeozitos.Models; // Importa o namespace onde está definida a classe Personagem.

namespace marmitariaLeozitos.Data // Define um namespace chamado ProjetoDBZ.Data para organizar o código.
{
    // Definição da classe AppDbContext que herda de DbContext, a classe base do Entity Framework para acessar o banco de dados.
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}

        public DbSet<Marmita> Marmita { get; set; }
    }
}