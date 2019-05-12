import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ActuatorsLinear = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].actuatorsLinear}
            pageTitle   = {CompanyMenu.pageData[0].actuatorsLinear.title}
            pageBody    = {CompanyMenu.pageData[0].actuatorsLinear.body}
            items       = {CompanyMenu.pageData[0].actuatorsLinear.items}
            data        = {CompanyMenu.pageData[0].actuatorsLinear.items}
        />
    )  
}

export default ActuatorsLinear;