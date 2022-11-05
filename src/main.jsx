import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./components/404";
import Cuadricula from "./components/Cuadricula";
import App from "./components/App";
import Home from "./Home";
import CriptoPage from "./components/cripto/CriptoPage";
import "./main.css";
import Perfil from "./Perfil";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />}></Route>
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />}></Route>
          <Route path=":id" element={<CriptoPage />}></Route>
        </Route>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
