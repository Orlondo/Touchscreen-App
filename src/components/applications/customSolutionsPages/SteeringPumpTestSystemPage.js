import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SteeringPumpTestSystemPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].steeringPumpTestSystem}
            pageTitle   = {CompanyMenu.pageData[0].steeringPumpTestSystem.title}
            pageBody    = {CompanyMenu.pageData[0].steeringPumpTestSystem.body}
            items       = {CompanyMenu.pageData[0].steeringPumpTestSystem.items}
            data        = {CompanyMenu.pageData[0].steeringPumpTestSystem.items}
        />
    )  
}

export default SteeringPumpTestSystemPage;