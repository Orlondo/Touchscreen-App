import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BearingEndurancePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].bearingEndurance}
            pageTitle   = {CompanyMenu.pageData[0].bearingEndurance.title}
            pageBody    = {CompanyMenu.pageData[0].bearingEndurance.body}
            items       = {CompanyMenu.pageData[0].bearingEndurance.items}
            data        = {CompanyMenu.pageData[0].bearingEndurance.items}
        />
    )  
}

export default BearingEndurancePage;