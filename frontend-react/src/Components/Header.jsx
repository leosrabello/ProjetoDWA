import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-orange-500 p-4 flex flex-col md:flex-row justify-between items-center">

      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <h1 className="text-white text-2xl font-bold">Bem-vindo à Marmitaria Leozitos 🍽️</h1>
        <input
          type="text"
          className="p-2 rounded border border-gray-300"
          placeholder="Buscar..."
        />
      </div>

      {/* Carrinho separado na direita */}
      <button className="group flex items-center bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-100 transition">
        <ShoppingCartIcon className="h-5 w-5 group-hover:animate-bounce-soft" />
      </button>


    </header>
  );
}

export default Header;
