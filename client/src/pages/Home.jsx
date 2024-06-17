import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import RoadMap from "../components/RoadMap";
import PlayerSummary from "../components/PlayerSummary";
import Mission from "../components/Mission";
import Popup from "../components/Popup";
import "./styles/Home.css";


function Home() {
  // eslint-disable-next-line
  const [userInfo, setUserInfo] = useOutletContext();
  const [badge, setBadge] = useState([{badge: ""}]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function completeMission(){
    const body = {
        email: userInfo.email,
        stage: userInfo.stage,
        level: userInfo.level,
        experience: userInfo.experience,
        badges: userInfo.stage.toString(),
    }
    console.log(body);
    fetch('http://localhost:4000/complete-mission', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })  
    .then((res) => res.json())
    .then((data) => setUserInfo(data))
    .then(() => getBadge(userInfo.stage))
    .then(() => setIsPopupOpen(true));
  }
  
  async function getBadge(stage) {
    const body = {
      stage: stage,
    }
    fetch('http://localhost:4000/badge', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    }).then((res) => res.json()
    .then((data) => setBadge(data)));
  }
  
  return (
    <div className="Home">
      {console.log(userInfo)}
      <div className="PlayerSummary"><PlayerSummary userinfo={userInfo}/></div>
      <div className="Mission" ><Mission userinfo={userInfo} completemission={completeMission}/></div>
      <div className="Roadmap" ><RoadMap userinfo={userInfo}/></div>
      {isPopupOpen && <div className="Popup" ><Popup badgeInfo={badge} onClose={() => setIsPopupOpen(false)}/></div>}
    </div>
  );
};

export default Home;