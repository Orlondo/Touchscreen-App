import React from 'react';
import CompanyMenu from '../../data/CompanyMenuData';
// import ItemButtonGenerator from '../ItemButtonGenerator';
import AboutUSVideoController from '../AboutUsVideoController';

const AboutUsPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].aboutUs.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <AboutUSVideoController
                sectionData = {CompanyMenu.pageData[0].aboutUs}
                pageTitle   = {CompanyMenu.pageData[0].aboutUs.title}
                pageBody    = {CompanyMenu.pageData[0].aboutUs.body}
                items       = {CompanyMenu.pageData[0].aboutUs.videos}
                data        = {CompanyMenu.pageData[0].aboutUs.videos}
            />
        </div>
    )     
}

export default AboutUsPage;