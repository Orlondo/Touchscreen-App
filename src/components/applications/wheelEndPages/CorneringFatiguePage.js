import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CorneringFatiguePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].corneringFatigue}
            pageTitle   = {CompanyMenu.pageData[0].corneringFatigue.title}
            pageBody    = {CompanyMenu.pageData[0].corneringFatigue.body}
            items       = {CompanyMenu.pageData[0].corneringFatigue.items}
            data        = {CompanyMenu.pageData[0].corneringFatigue.items}
        />
    )  
}

export default CorneringFatiguePage;