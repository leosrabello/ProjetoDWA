import React, { useState } from 'react'
import InputField from '../Components/InputField'
import InputFieldCep from '../Components/InputFieldCep'

function Endereco() {
  const [formData, setFormData] = useState(
    {
      cep: '',
      rua: '',
      numero: '',
      complemento: ''
    }
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <InputField 
          label="Rua:"
          id="rua"
          type="text"
          placeholder="Digite sua rua"
          value={formData.rua}
          onChange={(e) => setFormData({ ...formData, rua: e.target.value })}      
        />
      </div>
    </div>
  )
}

export default Endereco