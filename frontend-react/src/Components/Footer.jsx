import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Esquerda - Nome */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Marmitaria Leozitos 🍽️</h2>
          <p className="text-sm text-gray-400">Comida caseira com amor desde 2023</p>
        </div>

        <ul className="flex gap-6 text-sm">
          <li><a href="#" className="hover:text-orange-400 transition">Sobre</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Contato</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Ajuda</a></li>
        </ul>

        <div className="flex gap-4">
          <a href="#"><img src="/facebook.svg" alt="Facebook" className="h-5 w-5" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" className="h-5 w-5" /></a>
          <a href="#"><img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" /></a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        © 2025 Marmitaria Leozitos. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer