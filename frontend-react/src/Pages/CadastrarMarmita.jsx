import { useState } from 'react';
import axios from 'axios';

function CadastrarMarmita() {
  const [form, setForm] = useState({ descricao: '', valor: '' });
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.descricao || !form.valor || !imagem) {
      setErrorMsg('Preencha todos os campos e selecione uma imagem!');
      setSuccessMsg('');
      return;
    }

    setLoading(true);

    try {
      // Para backend com FormData (upload real de arquivo)
      const formData = new FormData();
      formData.append('descricao', form.descricao);
      formData.append('valor', parseFloat(form.valor));
      formData.append('imagem', imagem);

      await axios.post('http://localhost:5294/api/criar-marmita', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccessMsg('✅ Marmita cadastrada com sucesso!');
      setErrorMsg('');
      setForm({ descricao: '', valor: '' });
      setImagem(null);
      setPreview(null);
    } catch (err) {
      setErrorMsg('❌ Erro ao cadastrar marmita.');
      setSuccessMsg('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-600">Cadastro de Marmitas</h1>

        {successMsg && <p className="text-green-600 mb-4 animate-pulse">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 mb-4 animate-pulse">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Descrição</label>
            <input
              type="text"
              placeholder="Ex: Frango à Parmegiana"
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              placeholder="Ex: 25.00"
              value={form.valor}
              onChange={(e) => setForm({ ...form, valor: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Imagem da marmita</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg bg-white"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 rounded-lg shadow-md w-full h-48 object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 py-2 rounded-lg text-white font-bold transition ${
              loading ? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar Marmita'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarMarmita;
