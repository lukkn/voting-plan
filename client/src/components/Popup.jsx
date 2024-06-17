import { useState, useEffect } from 'react';
import './styles/Popup.css';
import Badge from './Badge';

function Popup({badgeInfo, onClose}) {
    
    return (
        <div className="Popup">
            <div className="Popup-inner">
                <h1>You Earned a Badge!</h1>
                {badgeInfo && <Badge badgeinfo={badgeInfo[0]}/>}
                <p>You can view all your badges in the Badges tab</p>
                <button onClick={onClose}>Yay!</button>
            </div>
        </div>
    );
}

export default Popup;