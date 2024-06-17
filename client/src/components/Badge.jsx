import "./styles/Badge.css";

function Badge(props){
    return (
        <div className="Badge">
            <img src={"/badges/" + props.badgeinfo.badge}></img>
            <p>{props.badgeinfo.name}</p>
        </div>
    );
}

export default Badge;