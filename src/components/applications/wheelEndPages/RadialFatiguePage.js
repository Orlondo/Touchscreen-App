import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const RadialFatiguePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].radialFatigue}
            pageTitle   = {CompanyMenu.pageData[0].radialFatigue.title}
            pageBody    = {CompanyMenu.pageData[0].radialFatigue.body}
            items       = {CompanyMenu.pageData[0].radialFatigue.items}
            data        = {CompanyMenu.pageData[0].radialFatigue.items}
        />
    )  
}

export default RadialFatiguePage;