import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SpiralWashersPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].spiralWashers}
            pageTitle   = {CompanyMenu.pageData[0].spiralWashers.title}
            pageBody    = {CompanyMenu.pageData[0].spiralWashers.body}
            items       = {CompanyMenu.pageData[0].spiralWashers.items}
            data        = {CompanyMenu.pageData[0].spiralWashers.items}
        />
    )     
}

export default SpiralWashersPage;