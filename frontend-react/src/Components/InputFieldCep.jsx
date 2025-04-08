import React, { useState } from 'react';
import axios from 'axios';

function InputFieldCep({ label, id, type = "text", placeholder, setRua }) {
  const [value, setValue] = useState("");

  const alteracoesCep = (e) => {
    let val = e.target.value;
    if (type === "cep") {
      val = val.replace(/\D/g, "");

      if (val.length > 5) {
        val = val.slice(0, 8);

        if (val.length === 8) {
          axios.get(`https://viacep.com.br/ws/${val}/json/`)
            .then(response => {
              const data = response.data;
              if (!data.erro) {
                setRua(data.logradouro); 
              } else {
                setRua(""); 
              }
            })
            .catch(err => console.error("Erro ao buscar CEP:", err));

          val = val.slice(0, 5) + '-' + val.slice(5);
        }
      }
    }
    setValue(val);
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type === "cep" ? "text" : type}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder={placeholder}
        value={value}
        onChange={alteracoesCep}
      />
    </div>
  );
}

export default InputFieldCep;
