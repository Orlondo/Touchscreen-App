import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const WheelImpactTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].WheelImpactTester}
            pageTitle   = {CompanyMenu.pageData[0].WheelImpactTester.title}
            pageBody    = {CompanyMenu.pageData[0].WheelImpactTester.body}
            items       = {CompanyMenu.pageData[0].WheelImpactTester.items}
            data        = {CompanyMenu.pageData[0].WheelImpactTester.items}
        />
    )  
}

export default WheelImpactTesterPage;