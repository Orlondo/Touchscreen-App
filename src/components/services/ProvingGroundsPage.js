import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const ProvingGroundsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="page-header-content">
                <h2>{MenuContent.headerContent[0].proving_grounds.title}</h2>
                <p>{MenuContent.headerContent[0].proving_grounds.body}</p>
            </div>
            <div className="non-dragContainer">
                { MenuContent.provingGrounds.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button provingGrounds-btn">
                        <span>
                            {item.label}
                        </span>
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
)

export default ProvingGroundsPage;