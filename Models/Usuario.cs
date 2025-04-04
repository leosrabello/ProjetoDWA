namespace marmitariaLeozitos.Models
{
    public class Usuario
    {
        public int Id {get; set;}

        public string nome {get; set;}

        private string senha {get; set;}
    
        public List<Pedido> Pedidos {get; set;}
    }

}