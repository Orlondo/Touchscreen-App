import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Certifications_RegistrationsPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].certifications_registrations.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].certifications_registrations}
                pageTitle   = {MenuData.pageData[0].certifications_registrations.title}
                pageBody    = {MenuData.pageData[0].certifications_registrations.body}
                items       = {MenuData.pageData[0].certifications_registrations.items}
                data        = {MenuData.pageData[0].certifications_registrations.items}
            />
        </div>
    )  
}

export default Certifications_RegistrationsPage;