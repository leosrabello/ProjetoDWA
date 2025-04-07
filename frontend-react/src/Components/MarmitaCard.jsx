import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';

function MarmitaCard() {
  const [marmitas, setMarmitas] = useState([]);

  useEffect(() => {
    const buscarMarmitas = async () => {
      try {
        const response = await axios.get("http://localhost:5294/api/buscar-todas-marmitas");

        // Embaralhar o array e pegar os 6 primeiros (ou menos se não tiver tudo isso)
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {marmitas.map((marmita) => (
        <Tilt   glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={250}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                key={marmita.id} 
                className="shadow-xl rounded-lg p-4 flex flex-col items-center text-center bg-gray-800 text-orange-500">

          <h3 className="text-lg font-bold mb-2">{marmita.descricao}</h3>
          <span className="font-semibold">R$ {marmita.valor.toFixed(2)}</span>

        </Tilt>
      ))}
    </div>
  );
}

export default MarmitaCard;
