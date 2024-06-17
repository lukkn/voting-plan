import { useState,useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Badge from "../components/Badge";
import "./styles/Badges.css";

function Badges() {
  const [userInfo, setUserInfo] = useOutletContext();
  const [badges, setBadges] = useState({});

  // Fetching message from backend
  async function getBadges() {
    const body = {
      badges: userInfo.badges,
  }
  fetch(process.env.REACT_APP_SERVER_URL + '/badges', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
  }).then((res) => res.json())
    .then((data) => setBadges(data));
  }

  useEffect(() => {
    getBadges();
  }, []);

  return (
    <div className="Badges">
      {badges.length > 0 ? (badges.map((badge) => (
        <Badge badgeinfo={badge}/>))) : 
        (<h3>No badges yet, complete a mission to earn a badge!</h3>) 
      }
    </div>
  );
};

export default Badges;