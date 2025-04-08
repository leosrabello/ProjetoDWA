import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center font-sans">

      {/* Logo e título */}
      <div className="flex items-center gap-3">
        <img src="/leozitos marmitaria.png" alt="Logo" className="h-10 w-auto object-contain" />
        <h1 className="text-black text-xl font-bold">Marmitaria Leozitos</h1>
      </div>

      {/* Menu central */}
      <nav className="hidden md:flex gap-6 text-black font-medium">
        <a href="#" className="hover:text-red-500 transition">Marmitas</a>
        <a href="#" className="hover:text-red-500 transition">Mais categorias</a>
        <a href="#" className="hover:text-red-500 transition">Objetivos</a>
        <a href="#" className="hover:text-red-500 transition">Sobre nós</a>
      </nav>

      {/* Ícones do lado direito */}
      <div className="flex items-center gap-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-700 cursor-pointer" />
        <MapPinIcon className="h-5 w-5 text-gray-700 cursor-pointer" />
        <UserIcon className="h-5 w-5 text-gray-700 cursor-pointer" />
        <button className="group flex items-center px-4 py-1.5 rounded-full 
          bg-red-600 text-white hover:bg-white hover:text-black 
          border border-red-600 transition hover:animate-bounce-soft">
          <ShoppingCartIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition" />
          <span className="hidden md:inline">Seu carrinho</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
