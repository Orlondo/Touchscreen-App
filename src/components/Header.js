import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../data/MainMenuData';
import ExitModal from '../components/ExitModal';

const slideHR_onButtonClick = (e) => {
    e.target.classList.add('active');
}

const showExitModel = () => {
    const exitModel = document.querySelector('.exit-model-container');

    exitModel.classList.add('show-exit-model');
    setTimeout(() => {
        exitModel.classList.add('fadeIn');
    }, 50)
   
}

const Header = (props) => {
    const data = MenuContent.data;

    return (
        <div className="header">
            <div className="logo" key={'logo'} onDoubleClick={showExitModel}>
                <img src="/images/logo/touchapp_logo-blue.png"/>    
            </div>
            <div className="header-nav-container">
                <NavLink to={'/company'} key={'company'} onClick={slideHR_onButtonClick} className="header-nav-btn">
                    <div>Company</div>
                </NavLink>
                <NavLink to={'/applications'} key={'application'} onClick={slideHR_onButtonClick} className="header-nav-btn">
                    <div>Applications</div>
                </NavLink>
                <NavLink to={'/services'} key={'services'} onClick={slideHR_onButtonClick} className="header-nav-btn">
                    <div>Services</div>
                </NavLink>
                <hr />      
            </div>
            <div className="bottom-bar"></div>
            <ExitModal />
        </div>  
    )


}

export default Header;