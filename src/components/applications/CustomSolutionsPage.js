import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const CustomSolutionsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                <h2>{MenuContent.headerContent[0].custom_solutions.title}</h2>
                <p>{MenuContent.headerContent[0].custom_solutions.body}</p>
            </div>
            <div className="non-dragContainer sub-menu-container">
                { MenuContent.customSolutions.map((item) => 
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

export default CustomSolutionsPage;