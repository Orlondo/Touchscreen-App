import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const DeltaPThruHoleMountingPlatePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].deltaPThruHoleMountingPlate}
            pageTitle   = {CompanyMenu.pageData[0].deltaPThruHoleMountingPlate.title}
            pageBody    = {CompanyMenu.pageData[0].deltaPThruHoleMountingPlate.body}
            items       = {CompanyMenu.pageData[0].deltaPThruHoleMountingPlate.items}
            data        = {CompanyMenu.pageData[0].deltaPThruHoleMountingPlate.items}
        />
    )  
}

export default DeltaPThruHoleMountingPlatePage;