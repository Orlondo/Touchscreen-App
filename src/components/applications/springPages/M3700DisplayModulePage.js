import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M3700DisplayModulePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m3700DisplayModule}
            pageTitle   = {CompanyMenu.pageData[0].m3700DisplayModule.title}
            pageBody    = {CompanyMenu.pageData[0].m3700DisplayModule.body}
            items       = {CompanyMenu.pageData[0].m3700DisplayModule.items}
            data        = {CompanyMenu.pageData[0].m3700DisplayModule.items}
        />
    )  
}

export default M3700DisplayModulePage;