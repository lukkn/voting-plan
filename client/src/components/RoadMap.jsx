import './styles/RoadMap.css';

function RoadMap(props) {
    var img_src = "";
    switch (props.userinfo.stage) {
        case 1:
            img_src = "/map_start.png";
            break;
        case 2:
            img_src = "/map_01.png";
            break;
        case 3:
            img_src = "/map_02.png";
            break;
        case 4:
            img_src = "/map_03.png";
            break;
        case 5:
            img_src = "/map_04.png";
            break;
        case 6:
            img_src = "/map_end.png";
    }


    return (
        <div className='RoadMap'>
            <img id="map" src={img_src}></img>
        </div>
    );
};

export default RoadMap;