import { useState } from 'react';
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useCart } from '../Context/CartContext'; // 👈 Importa o contexto

function Header() {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart(); // 👈 Acessa os itens do carrinho

  // Calcula total
  const total = cartItems.reduce((sum, item) => sum + item.valor * item.quantidade, 0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center font-sans">
        {/* Logo e título */}
        <div className="flex items-center gap-3">
          <img
            src="/leozitos marmitaria.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
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
          <button
            className="group flex items-center px-4 py-1.5 rounded-full 
              bg-red-600 text-white hover:bg-white hover:text-black 
              border border-red-600 transition hover:animate-bounce-soft"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition" />
            <span className="hidden md:inline">Seu carrinho</span>
          </button>
        </div>
      </header>

      {/* Painel do carrinho */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Seu carrinho</h2>
          <button onClick={() => setCartOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 mb-2">Você ainda não adicionou itens.</p>
          ) : (
            <>
              <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">{item.descricao}</p>
                      <p className="text-sm text-gray-500">Qtd: {item.quantidade}</p>
                    </div>
                    <span className="text-red-600 font-semibold">
                      R$ {(item.valor * item.quantidade).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="mt-6 border-t pt-4 text-right">
                <p className="text-lg font-bold">Total: R$ {total.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fundo escurecido */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
