import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../../data/BrakesSubMenuData';

const DynamometerPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.brakesMenus[0].label}</h2>
            </div>

            <div className="non-dragContainer breaks-submenu">
                { MenuContent.data[0].map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button sub-menu-btn height-large dynamometer-menu">
                            <span>
                                {item.label}
                            </span>
                    </NavLink>
                )}
            </div>
        </div>
    </div>
)

export default DynamometerPage;
