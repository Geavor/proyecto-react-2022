import { useEffect, useState } from "react";
import axios from "axios";

import Tabla from "./Tabla";
import "./App.css";

function App() {
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
    <>
      <h1>Lista de Criptomonedas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Simbolo</th>
            <th>Precio</th>
            <th>Cambio</th>
          </tr>
        </thead>
        <tbody>
          {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Tabla
              key={id}
              nombre={name}
              precio={priceUsd}
              simbolo={symbol}
              cambio={changePercent24Hr}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
