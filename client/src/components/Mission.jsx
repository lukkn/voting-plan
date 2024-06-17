import { useState, useEffect } from "react";
import './styles/Mission.css';

function Mission(props) {

    const [mission, setMission] = useState({});
    const body = {
        stage: props.userinfo.stage
    };

    function getMission(){
        fetch(process.env.REACT_APP_SERVER_URL + '/mission', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })  
        .then((res) => res.json())
        .then((data) => setMission(data));
    }

    useEffect(() => {
        getMission();
    }, [props.userinfo.stage, getMission]);

    return (
        <div className='Mission'>
            <h2>{props.userinfo.stage < 6 && <>Current Mission:</>} {mission && mission.name}</h2>
            <p>{mission && mission.instructions}</p> 
            {props.userinfo.stage < 6 && <button onClick={props.completemission}>Complete Mission</button>}
        </div>
    );
};

export default Mission;