import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HydraulicPowerSupplyPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].hydraulicPowerSupply}
            pageTitle   = {CompanyMenu.pageData[0].hydraulicPowerSupply.title}
            pageBody    = {CompanyMenu.pageData[0].hydraulicPowerSupply.body}
            items       = {CompanyMenu.pageData[0].hydraulicPowerSupply.items}
            data        = {CompanyMenu.pageData[0].hydraulicPowerSupply.items}
        />
    )     
}

export default HydraulicPowerSupplyPage;