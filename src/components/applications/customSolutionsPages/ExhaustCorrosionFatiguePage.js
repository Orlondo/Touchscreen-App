import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ExhaustCorrosionFatiguePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].exhaustCorrosionFatigue}
            pageTitle   = {CompanyMenu.pageData[0].exhaustCorrosionFatigue.title}
            pageBody    = {CompanyMenu.pageData[0].exhaustCorrosionFatigue.body}
            items       = {CompanyMenu.pageData[0].exhaustCorrosionFatigue.items}
            data        = {CompanyMenu.pageData[0].exhaustCorrosionFatigue.items}
        />
    )  
}

export default ExhaustCorrosionFatiguePage;