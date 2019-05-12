import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const EccentricMassWheelPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].eccentricMassWheel}
            pageTitle   = {CompanyMenu.pageData[0].eccentricMassWheel.title}
            pageBody    = {CompanyMenu.pageData[0].eccentricMassWheel.body}
            items       = {CompanyMenu.pageData[0].eccentricMassWheel.items}
            data        = {CompanyMenu.pageData[0].eccentricMassWheel.items}
        />
    )  
}

export default EccentricMassWheelPage;