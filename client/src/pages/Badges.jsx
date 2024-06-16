import { useState } from "react";

function Badges() {
  const [data, setData] = useState({});

  // Fetching message from backend
  async function getBadges() {
    fetch('http://localhost:4000/badges', {
    })
    .then((res) => res.json())
    .then((data) => setData(data))
    .then(() => console.log(data));
  }

  return (
    <>
      <div className="badges_page">
        <h4>
          Badges
        </h4>
        <button type="button" onClick={getBadges}>Get Badges</button>
      </div>
    </>
  );
};

export default Badges;