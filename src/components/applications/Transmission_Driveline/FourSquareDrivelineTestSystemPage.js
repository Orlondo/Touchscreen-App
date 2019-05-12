import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const FourSquareDrivelineTestSystemPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].fourSquareDrivelineTestSystem}
            pageTitle   = {CompanyMenu.pageData[0].fourSquareDrivelineTestSystem.title}
            pageBody    = {CompanyMenu.pageData[0].fourSquareDrivelineTestSystem.body}
            items       = {CompanyMenu.pageData[0].fourSquareDrivelineTestSystem.items}
            data        = {CompanyMenu.pageData[0].fourSquareDrivelineTestSystem.items}
        />
    )  
}

export default FourSquareDrivelineTestSystemPage;