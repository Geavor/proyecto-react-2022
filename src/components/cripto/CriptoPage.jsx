import { useParams } from "react-router-dom";
import usePetition from "../../hooks/usePetition";
import "./CriptoPage.css";
import CriptoHistorial from "./info/CriptoHistorial";
import CriptoInfo from "./info/CriptoInfo";

const CriptoPage = () => {
  const params = useParams();

  const [cripto,cargandoCripto,errorCripto] = usePetition(`assets/${params.id}`);
  const [history,cargandoHistory,errorHistory] = usePetition(
    `assets/${params.id}/history?interval=d1&start=1659700000000&end=1662490888952`
  );

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>;
  if (errorCripto|| errorHistory) return (<span>Ha ocurrido el siguiente error: <br/>Cripto:{errorCripto.message} - History:{errorHistory.message}</span>);

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
      {history && <CriptoHistorial history={history} />}
    </div>
  );
};

export default CriptoPage;
