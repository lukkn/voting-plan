import { useState, useEffect } from "react";

function Mission(props) {

    const [mission, setMission] = useState({});
    const body = {
        stage: props.userinfo.stage
    };

    function getMission(){
        fetch('http://localhost:4000/mission', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })  
        .then((res) => res.json())
        .then((data) => setMission(data));
    }

    useEffect(() => {
        getMission();
    }, [props.userinfo.stage]);

    return (
        <div className='Mission'>
            {props.userinfo.stage < 6 && <h2>Current Mission:</h2>} {mission && <h2>{mission.name}</h2>}
            <p>{mission && mission.instructions}</p> 
            {props.userinfo.stage < 6 && <button onClick={props.completemission}>Complete Mission</button>}
        </div>
    );
};

export default Mission;