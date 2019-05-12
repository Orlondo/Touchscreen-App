import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Icons from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon';
import { backward2 } from 'react-icons-kit/icomoon/backward2';

const Footer = () => (
    <div className="footer">
        <div className="footer-nav-content">
        <NavLink to="/company" 
            className="home-btn" 
            style={{ color: '#fff' }}>
            <Icons icon={home}/>
        </NavLink>
            
        <div 
            onClick={goBack} 
            className="back-btn" 
            style={{ color: '#fff' }}>
            <Icons icon={backward2}/>
        </div>
        </div>
    </div>
)

/* Back Button */
const goBack = () => {
    if (window.location.pathname !== "/company"){
        history.back();
    } else {

    }
}

export default Footer;
