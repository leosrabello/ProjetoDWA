using Microsoft.EntityFrameworkCore;
using marmitariaLeozitos.Models;

namespace marmitariaLeozitos.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}

        public DbSet<Marmita> Marmita { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Marmita>()
                .Property(m => m.Valor)
                .HasPrecision(10, 2);

            base.OnModelCreating(modelBuilder);
        }
    }
}
