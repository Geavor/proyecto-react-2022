import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./components/404";
import Cuadricula from "./components/Cuadricula";
import App from "./components/App";
import Home from "./Home";
import CriptoPage from "./components/cripto/CriptoPage";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<Cuadricula />}></Route>
        <Route path=":id" element={<CriptoPage />}></Route>
      </Route>
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
