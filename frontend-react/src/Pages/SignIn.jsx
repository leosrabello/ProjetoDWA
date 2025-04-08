import React, { useState } from 'react';
import Carousel from '../Components/Carousel';
import InputField from '../Components/InputField';
import ErrorMessage from '../Components/ErrorMessage';
import axios from 'axios';
import { useError } from '../Context/ErrorContext';

function SignIn() {
  const { showError, errorMsg, clearError } = useError();
  // const [rua, setRua] = useState("");

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    csenha: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const usuarioData = {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
      logradouroId: null,
      logradouro: null,
      pedidos: [] 
    };
  
    if(usuarioData.nome == '' || usuarioData.email == '' || usuarioData.senha == '') 
      {
        showError("Um ou mais campos se encontra vazio.");
        return;
      }
    if(usuarioData.senha.length < 5) {
      showError("A senha tem que ter no mínimo 5 caractéres.");
      return;
    }
    if(usuarioData.senha != formData.csenha) {
      showError("As senhas não coincidem. Por favor, verifique os campos de senha e confirmação.")
      return;
    }

    try {
      const response = await axios.post("http://localhost:5294/api/cadastrar-usuario", usuarioData);
      console.log("Usuário cadastrado com sucesso:", response.data);
      setFormData({
        nome: '',
        email: '',
        senha: '',
        csenha: ''
      });

    } catch (error) {
      showError("Erro ao cadastrar usuário: " + error.response?.data || error.message);
    }
  };
  

  return (
    <div className='min-h-screen flex justify-end bg-orange-500'>

    {errorMsg && (
          <ErrorMessage msg={errorMsg} onClose={clearError} />
        )}

      <div className="w-2/3 flex items-center justify-center bg-orange-500">
        <Carousel />
      </div>

      <div className="min-h-screen w-1/3 flex justify-end items-center bg-white p-8 shadow-lg">
        <form
          className="w-full max-w-sm flex flex-col"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">Crie sua conta!</h2>

          <InputField
            label="Nome:"
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />

          <InputField
            label="Email:"
            id="email"
            type="email"
            placeholder="Email@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          {/* <InputField
            label="CEP:"
            id="cep"
            type="cep"
            placeholder="Digite seu CEP apenas números!"
            setRua={setRua}
          />

        <div className="flex flex-col mb-4">
          <label htmlFor="rua" className="mb-1 font-medium text-gray-700">Rua:</label>
          <input
            id="rua"
            type="text"
            value={rua}
            readOnly // impede digitação manual
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder='Rua teste..'
          />
        </div>

          <InputField
            label="Complemento:"
            id="complemento"
            type="text"
            placeholder="Apartamento 1.."
          /> */}

          <InputField
            label="Senha:"
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          />

          <InputField
            label="Confirmar Senha:"
            id="csenha"
            type="password"
            placeholder="Confirme sua senha"
            value={formData.csenha}
            onChange={(e) => setFormData({ ...formData, csenha: e.target.value })}
          />

          <div className="flex flex-col gap-2 mt-10">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition active:animate-ping-once"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
