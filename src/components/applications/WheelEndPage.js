import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const WheelEndPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.headerContent[0].wheel_end.title}</h2>
                <p>{MenuContent.headerContent[0].wheel_end.body}</p>
            </div>
            <div className="non-dragContainer sub-menu-container">
                { MenuContent.wheelEnd.map((item) => 
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

export default WheelEndPage;