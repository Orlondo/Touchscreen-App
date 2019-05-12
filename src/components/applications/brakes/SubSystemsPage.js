import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../../data/BrakesSubMenuData';

const SubSystemsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.brakesMenus[2].label}</h2>
            </div>
            <div className="sub-systems-menu">
                { MenuContent.data[2].map((item) => 
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

export default SubSystemsPage;