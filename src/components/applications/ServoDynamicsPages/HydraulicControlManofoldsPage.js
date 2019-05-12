import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HydraulicControlManofoldsPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].hydraulicControlManofolds}
            pageTitle   = {CompanyMenu.pageData[0].hydraulicControlManofolds.title}
            pageBody    = {CompanyMenu.pageData[0].hydraulicControlManofolds.body}
            items       = {CompanyMenu.pageData[0].hydraulicControlManofolds.items}
            data        = {CompanyMenu.pageData[0].hydraulicControlManofolds.items}
        />
    )     
}

export default HydraulicControlManofoldsPage;