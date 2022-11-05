import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    setUsuario({
      name: "Jorge V",
      registered: "14/Febrero/2022",
    });
  }, []);

  return (
    <UserContext.Provider value={usuario}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
