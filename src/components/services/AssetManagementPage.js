import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const AssetManagementPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="page-header-content">
                <h2>{MenuContent.headerContent[0].asset_management.title}</h2>
                <p>{MenuContent.headerContent[0].asset_management.body}</p>
            </div>
            <div className="non-dragContainer">
                { MenuContent.assetManagement.map((item) => 
                    <NavLink 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button assetManagement-btn">
                        <span>
                            {item.label}
                        </span>
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
)

export default AssetManagementPage;