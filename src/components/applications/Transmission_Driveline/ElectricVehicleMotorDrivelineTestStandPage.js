import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ElectricVehicleMotorDrivelineTestStandPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].electricVehicleMotorDrivelineTestStand}
            pageTitle   = {CompanyMenu.pageData[0].electricVehicleMotorDrivelineTestStand.title}
            pageBody    = {CompanyMenu.pageData[0].electricVehicleMotorDrivelineTestStand.body}
            items       = {CompanyMenu.pageData[0].electricVehicleMotorDrivelineTestStand.items}
            data        = {CompanyMenu.pageData[0].electricVehicleMotorDrivelineTestStand.items}
        />
    )  
}

export default ElectricVehicleMotorDrivelineTestStandPage;