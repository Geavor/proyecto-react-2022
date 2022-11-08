import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API2_URL = import.meta.env.VITE_API2_URL;
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    axios
      .get(`${API2_URL}users/2`)
      .then((data) => {
        setUsuario(data.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <UserContext.Provider value={usuario}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
