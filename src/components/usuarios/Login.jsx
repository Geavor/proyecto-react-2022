import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();
  const API2_URL = import.meta.env.VITE_API2_URL;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    axios
      .post(`${API2_URL}login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setCargando(false);
        console.table(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "Cargando..." : "Ingresar"}
            className="link"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};

export default Login;
