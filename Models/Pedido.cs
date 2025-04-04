namespace marmitariaLeozitos.Models 
{
    public class Pedido 
    {
        public int Id { get; set; }

        public int MarmitaId { get; set; }
        public Marmita Marmita { get; set; }
    
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public DateTime Data { get; set; }
    }
}
