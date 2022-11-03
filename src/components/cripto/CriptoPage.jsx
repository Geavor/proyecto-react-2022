import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CriptoPage.css";

const CriptoPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [state, setState] = useState();

  const getMil = (date) => {
    if (Boolean(date)) {
      return new Date(date).getTime();
    }
    return Date.now();
  };

  const req1 = axios.get(`${API_URL}assets/${params.id}`);
  const req2 = axios.get(
    `${API_URL}assets/${params.id}/history?interval=d1&start=${getMil(
      "2022-10-01"
    )}&end=${getMil()}`
  );

  useEffect(() => {
    axios
      .all([req1, req2])
      .then(
        axios.spread((...responses) => {
          const resp1 = responses[0].data.data;
          const resp2 = responses[1].data.data;
          setState({ ...resp1, historical: resp2 });
        })
      )
      .catch((errors) => {
        console.error("La petición multiple falló", errors);
      });
  }, []);

  if (!state) return <span>Cargando...</span>;

  return (
    <>
      <div className="cripto-info">
        <h2 className="titulo-cripto">Criptomoneda: {state.name}</h2>
        <p>
          <span className="text-cripto">Simbolo: </span>
          {state.symbol}
        </p>
        <p>
          <span className="text-cripto">Rank: </span>
          {state.rank}
        </p>
        <p>
          <span className="text-cripto">Precio: </span>
          {parseFloat(state.priceUsd).toFixed(3)}
        </p>
        <p>
          <span className="text-cripto">Página: </span>
          <a href={state.explorer}>Enlace</a>
        </p>
      </div>
      <div className="history-price">
        <h2>Historial de Cambios</h2>
        <table className="history-price-table">
          <thead>
            <tr>
              <td>Precio</td>
              <td>Fecha</td>
            </tr>
          </thead>
          <tbody>
            {state.historical.map(({ date, priceUsd, time }) => (
              <tr key={time}>
                <td>{parseFloat(priceUsd).toFixed(2)}</td>
                <td>{String(date).slice(0,10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="back-cripto" to="/criptomonedas">Regresar</Link>
    </>
  );
};

export default CriptoPage;
