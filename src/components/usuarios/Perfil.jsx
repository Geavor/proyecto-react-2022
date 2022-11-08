import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {
  const usuario = useContext(UserContext);

  return (
    <div>
      <h1>
        Perfil de {usuario.first_name} {usuario.last_name}
      </h1>
      <div>Usuario desde: {new Date().getFullYear() - 1}</div>
      <div>Correo: {usuario.email}</div>
      <div>
        Avatar:
        <div className="avatar">
          <img src={usuario.avatar} alt="Usuario" />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
