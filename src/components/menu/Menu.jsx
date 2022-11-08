import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Menu.css";

const Menu = () => {

  const navigation = useNavigate();
  const usuario = useContext(UserContext);

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/criptomonedas">Lista de criptos</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Perfil de {usuario.first_name} {usuario.last_name}</NavLink>
        </li>
        <li>
          <a
            onClick={() => {
              localStorage.removeItem("tokenEDmarket");
              navigation("/login");
            }}
          >
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
