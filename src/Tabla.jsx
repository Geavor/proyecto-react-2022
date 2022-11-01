import { useEffect, useRef } from "react";

const Tabla = ({ nombre, precio, simbolo, cambio }) => {
  /*   const refCambio = useRef();
  const estilo = (valor) => {
    if (valor < 0) {
      refCambio.current.classList.add("red");
    } else {
      refCambio.current.classList.add("green");
    }
  };

  useEffect(() => {
    estilo(Number(cambio));
  }); */

  const otroEstilo = (valor) => (valor > 0 ? "green" : "red");
  return (
    <tr>
      <td className="nombre-td">{nombre}</td>
      <td className="informacion">{simbolo}</td>
      <td className="informacion">{Number(precio).toFixed(2)}</td>
      <td className={"informacion " + otroEstilo(Number(cambio))}>
        {Number(cambio).toFixed(3).concat("%")}
      </td>
    </tr>
  );
};

export default Tabla;
