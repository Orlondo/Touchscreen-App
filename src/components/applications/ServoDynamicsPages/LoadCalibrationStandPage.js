import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LoadCalibrationStandPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].loadCalibrationStand}
            pageTitle   = {CompanyMenu.pageData[0].loadCalibrationStand.title}
            pageBody    = {CompanyMenu.pageData[0].loadCalibrationStand.body}
            items       = {CompanyMenu.pageData[0].loadCalibrationStand.items}
            data        = {CompanyMenu.pageData[0].loadCalibrationStand.items}
        />
    )     
}

export default LoadCalibrationStandPage;