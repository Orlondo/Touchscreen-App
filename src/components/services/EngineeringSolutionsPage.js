import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const EngineeringSolutionsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="page-header-content">
                <h2>{MenuContent.headerContent[0].engineering_solutions.title}</h2>
                <p>{MenuContent.headerContent[0].engineering_solutions.body}</p>
            </div>
            <div className="non-dragContainer">
                { MenuContent.engineeringSolutions.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button engineeringSolutions-btn">
                        <span>
                            {item.label}
                        </span>
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
)

export default EngineeringSolutionsPage;