import axios from "axios";
import { useEffect, useState } from "react";
import MarmitaItemCard from "./MarmitaItemCard.jsx";

function MarmitaCard() {
  const [marmitas, setMarmitas] = useState([]);

  useEffect(() => {
    const buscarMarmitas = async () => {
      try {
        const response = await axios.get("http://localhost:5294/api/buscar-todas-marmitas");
        const embaralhadas = response.data.sort(() => 0.5 - Math.random());
        const selecionadas = embaralhadas.slice(0, 6);
        setMarmitas(selecionadas);
      } catch (error) {
        console.error("Erro ao buscar as marmitas", error);
      }
    };

    buscarMarmitas();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {marmitas.map((marmita) => (
        <MarmitaItemCard
          key={marmita.id}
          marmita={marmita}
        />
      ))}
    </div>
  );
}

export default MarmitaCard;
