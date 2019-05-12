import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HubBearingPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].hubBearing}
            pageTitle   = {CompanyMenu.pageData[0].hubBearing.title}
            pageBody    = {CompanyMenu.pageData[0].hubBearing.body}
            items       = {CompanyMenu.pageData[0].hubBearing.items}
            data        = {CompanyMenu.pageData[0].hubBearing.items}
        />
    )  
}

export default HubBearingPage;