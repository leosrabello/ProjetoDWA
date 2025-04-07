import React from 'react';
import Carousel from '../Components/Carousel';

function Login() {
  return (
    <div className='min-h-screen flex justify-end bg-orange-500'>
        <div className="w-2/3 flex items-center justify-center bg-orange-500">
        {/* Aqui você pode colocar o componente de carrossel ou imagens estáticas por enquanto */}
            <Carousel />
        </div>

      <div className="min-h-screen w-1/3 flex justify-end  items-center bg-white p-8 shadow-lg ">
        <form
          className="w-full max-w-sm flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">Seja bem vindo! 🍽️</h2>  

          <div className="flex flex-col mb-4">
            <label htmlFor="nome" className="mb-1 font-medium text-gray-700">Nome:</label>
            <input
              id="nome"
              type="text"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="senha" className="mb-1 font-medium text-gray-700">Senha:</label>
            <input
              id="senha"
              type="password"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Digite sua senha"
            />
          </div>

          {/* Botões agrupados e empurrados pra baixo com mt-auto */}
          <div className="flex flex-col gap-2 mt-10">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
            >
              Entrar
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
