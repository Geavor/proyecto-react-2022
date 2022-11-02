import { useEffect, useState } from "react";
import axios from "axios";

import "./Cuadricula.css";
import Cripto from "./cripto/Cripto";

function Cuadricula() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [criptos, setCriptos] = useState();

  /*   useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data);
      })
      .catch(() => {
        console.error("La petición fallo");
      });
  }, []); */

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La petición fallo");
      });
  }, []);

  if (!criptos) return <span>Cargando...</span>;

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Cripto
            key={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Cuadricula;
