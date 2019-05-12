import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../../data/BrakesSubMenuData';

const TestStandsPage = () => (
    <div className="scene">
        <div className="page-header-content">
            <h2>{MenuContent.brakesMenus[1].label}</h2>
        </div>
        <div className="non-dragContainer breaks-submenu">
            { MenuContent.data[1].map((item) => 
                <NavLink 
                    style={{backgroundImage:`url(${item.backgroundImage})`}}
                    to={item.pathname} 
                    key={item.label} 
                    className="menu-button sub-menu-btn height-small test-stands-menu">
                        <span>
                            {item.label}
                        </span>
                </NavLink>
            )}
        </div>
    </div>
)

export default TestStandsPage;
