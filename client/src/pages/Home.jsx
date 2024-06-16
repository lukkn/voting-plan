import RoadMap from "../components/RoadMap";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="PlayerSummary"></div>
      <div className="Roadmap"> <RoadMap /> </div>
    </div>
  );
};

export default Home;