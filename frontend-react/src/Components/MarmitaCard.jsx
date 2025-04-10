import axios from "axios";
import { useEffect, useState } from "react";
import MarmitaItemCard from "./MarmitaItemCard.jsx";

// Imagens
import frangoGrelhado from '../img/frango-grelhado.jpeg';
import fileMignon from '../img/file-mignon.jpeg';
import frangoMilanesa from '../img/frango-milanesa.jpg';

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

  const imagens = {
    "Frango Grelhado": frangoGrelhado,
    "Filé Mignon": fileMignon,
    "Frango à Milanesa": frangoMilanesa,
  };

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
