import { useParams } from "react-router-dom";

const CriptoPage = () => {
  const params = useParams();

  return (
    <div className="cripto-info">
      <h1>Hola soy la criptomoneda {params.id}</h1>
    </div>
  );
};

export default CriptoPage;
