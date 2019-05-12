import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/CompanyMenuData';

const TescorPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div className="page-header-content">
                {MenuContent.pageData[0].tescor.title}
                {MenuContent.pageData[0].tescor.subTitle}
                <br />
                {MenuContent.pageData[0].tescor.body}
            </div>

            <div className="non-dragContainer tescor-menu-container">
                { MenuContent.pageData[0].tescor.subMenu.map((item) => 
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

export default TescorPage;