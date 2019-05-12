import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ActuatorsRotaryPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].actuatorsRotary}
            pageTitle   = {CompanyMenu.pageData[0].actuatorsRotary.title}
            pageBody    = {CompanyMenu.pageData[0].actuatorsRotary.body}
            items       = {CompanyMenu.pageData[0].actuatorsRotary.items}
            data        = {CompanyMenu.pageData[0].actuatorsRotary.items}
        />
    )  
}

export default ActuatorsRotaryPage;