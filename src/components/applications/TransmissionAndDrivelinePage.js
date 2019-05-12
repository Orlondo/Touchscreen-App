import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const TransmissionAndDrivelinePage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.headerContent[0].transmission_and_driveline.title}</h2>
                <p>{MenuContent.headerContent[0].transmission_and_driveline.body}</p>
            </div>
            <div className="non-dragContainer sub-menu-container">
                { MenuContent.transmissionAndDriveline.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button sub-menu-btn height-med">
                            <span>
                                {item.label}
                            </span>
                    </NavLink>
                )}
            </div>
        </div>
    </div>
)

export default TransmissionAndDrivelinePage;