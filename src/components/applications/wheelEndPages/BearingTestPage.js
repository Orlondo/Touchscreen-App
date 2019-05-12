import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BearingTestPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].bearingTest}
            pageTitle   = {CompanyMenu.pageData[0].bearingTest.title}
            pageBody    = {CompanyMenu.pageData[0].bearingTest.body}
            items       = {CompanyMenu.pageData[0].bearingTest.items}
            data        = {CompanyMenu.pageData[0].bearingTest.items}
        />
    )  
}

export default BearingTestPage;