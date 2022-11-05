import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);

    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false);
      })
      .catch((e) => {
        console.error(e);
        setCargando(false);
      });
  }, []);

  return [data,cargando];
};

export default usePetition;
