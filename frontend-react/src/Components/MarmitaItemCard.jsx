import { useState } from "react";
import { useCart } from "../Context/CartContext"; // 👈 importante

function MarmitaItemCard({ marmita, imagem }) {
  const [quantidade, setQuantidade] = useState(1);
  const { addToCart } = useCart(); // 👈 pega a função do contexto

  const aumentar = () => setQuantidade((q) => q + 1);
  const diminuir = () => setQuantidade((q) => Math.max(1, q - 1));

  const handleAdd = () => {
    addToCart(marmita, quantidade); // 👈 adiciona ao carrinho
    setQuantidade(1); // opcional: reseta
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition w-64">
      <img
        src={imagem}
        alt={marmita.descricao}
        className="h-36 w-full object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{marmita.descricao}</h3>
        <p className="text-red-600 font-semibold mb-3">R$ {marmita.valor.toFixed(2)}</p>

        <div className="flex justify-center items-center gap-4 mb-3">
          <button onClick={diminuir} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">–</button>
          <span className="text-lg font-semibold">{quantidade}</span>
          <button onClick={aumentar} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">+</button>
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          onClick={handleAdd}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default MarmitaItemCard;
