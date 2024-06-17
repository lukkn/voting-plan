import React from "react";

function PlayerSummary(props) {
  return (
    <div>
        <img src="/orange_cat.png" alt=""></img>
        <h1>{props.userinfo.username}</h1>
        <h4>New Voter</h4>
        <p>State: {props.userinfo.state}</p>
        <p>Lvl: {props.userinfo.level}</p>
        <p>Exp: {props.userinfo.experience}</p>
    </div>
    );
};

export default PlayerSummary;