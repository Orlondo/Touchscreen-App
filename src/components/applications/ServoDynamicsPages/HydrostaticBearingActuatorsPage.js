import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HydrostaticBearingActuatorsPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].hydrostaticBearingActuators}
            pageTitle   = {CompanyMenu.pageData[0].hydrostaticBearingActuators.title}
            pageBody    = {CompanyMenu.pageData[0].hydrostaticBearingActuators.body}
            items       = {CompanyMenu.pageData[0].hydrostaticBearingActuators.items}
            data        = {CompanyMenu.pageData[0].hydrostaticBearingActuators.items}
        />
    )  
}

export default HydrostaticBearingActuatorsPage;