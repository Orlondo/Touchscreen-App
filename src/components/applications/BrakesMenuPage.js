import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const BrakesMenuPage = (props) => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.headerContent[0].brakes.title}</h2>
                <p>{MenuContent.headerContent[0].brakes.body}</p>
            </div>
            <div className="non-dragContainer">
                { MenuContent.brakesMenus.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button breaks-menu-btn">
                        <span>
                            {item.label}
                        </span>
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
)

export default BrakesMenuPage;