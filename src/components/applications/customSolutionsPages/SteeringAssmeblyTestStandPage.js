import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SteeringAssmeblyTestStandPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].steeringAssemblyTestStand}
            pageTitle   = {CompanyMenu.pageData[0].steeringAssemblyTestStand.title}
            pageBody    = {CompanyMenu.pageData[0].steeringAssemblyTestStand.body}
            items       = {CompanyMenu.pageData[0].steeringAssemblyTestStand.items}
            data        = {CompanyMenu.pageData[0].steeringAssemblyTestStand.items}
        />
    )  
}

export default SteeringAssmeblyTestStandPage;