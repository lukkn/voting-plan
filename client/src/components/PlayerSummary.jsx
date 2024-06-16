import React from "react";

function PlayerSummary(props) {
  return (
    <div>
        <img src="/orange_cat.png" alt=""></img>
        <h1>{props.username}</h1>
        <p>State: MA</p>
        <p>Lvl: 1</p>
        <p>Exp: 0</p>
    </div>
    );
};

export default PlayerSummary;