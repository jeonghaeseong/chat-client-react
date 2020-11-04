import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWifi,
    faBatteryFull,
    faBolt,
} from '@fortawesome/free-solid-svg-icons';

const StatusBar = () => {
    return (
        <div className="status-bar">
            <div className="status-bar__column">
                <span>No Service</span>
                <FontAwesomeIcon icon={faWifi} />
            </div>
            <div className="status-bar__column">
                <span>18:30</span>
            </div>
            <div className="status-bar__column">
                <span>100%</span>
                <FontAwesomeIcon icon={faBatteryFull} className="fa-lg" />
                <FontAwesomeIcon icon={faBolt} />
            </div>
        </div>
    );
};

export default StatusBar;
