import RoadMap from "../components/RoadMap";
import PlayerSummary from "../components/PlayerSummary";
import Mission from "../components/Mission";
import "./styles/Home.css";
import { useOutletContext } from "react-router-dom";

function Home() {
  // eslint-disable-next-line
  const [userInfo, setUserInfo] = useOutletContext();

  function completeMission(){
    const body = {
        email: userInfo.email,
        stage: userInfo.stage,
        level: userInfo.level,
        experience: userInfo.experience,
    }
    fetch('http://localhost:4000/complete-mission', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })  
    .then((res) => res.json())
    .then((data) => setUserInfo(data));
}

  return (
    <div className="Home">
      <div className="PlayerSummary"><PlayerSummary userinfo={userInfo}/></div>
      <div className="Mission" ><Mission userinfo={userInfo} completemission={completeMission}/></div>
      <div className="Roadmap" ><RoadMap userinfo={userInfo}/></div>
    </div>
  );
};

export default Home;