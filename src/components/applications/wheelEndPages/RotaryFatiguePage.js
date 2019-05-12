import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const RotaryFatiguePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].rotaryFatigue}
            pageTitle   = {CompanyMenu.pageData[0].rotaryFatigue.title}
            pageBody    = {CompanyMenu.pageData[0].rotaryFatigue.body}
            items       = {CompanyMenu.pageData[0].rotaryFatigue.items}
            data        = {CompanyMenu.pageData[0].rotaryFatigue.items}
        />
    )  
}

export default RotaryFatiguePage;