import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const ControlAndAcquisitionPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.headerContent[0].control_and_acquisition.title}</h2>
                <p>{MenuContent.headerContent[0].control_and_acquisition.body}</p>
            </div>
            <div className="non-dragContainer sub-menu-container">
                { MenuContent.controlAndAcquisition.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button sub-menu-btn">
                        <span>
                            {item.label}
                        </span>
                    </NavLink>
                )}
            </div>
        </div>
    </div>
)

export default ControlAndAcquisitionPage; 