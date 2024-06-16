import RoadMap from "../components/RoadMap";
import PlayerSummary from "../components/PlayerSummary";
import Mission from "../components/Mission";
import "./Home.css";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [username, setUsername] = useOutletContext();
  return (
    <div className="Home">
      <div className="PlayerSummary"><PlayerSummary username={username}/></div>
      <div className="Mission"><Mission /></div>
      <div className="Roadmap"><RoadMap /></div>
    </div>
  );
};

export default Home;