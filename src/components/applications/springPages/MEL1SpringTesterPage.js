import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MEL1SpringTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].mEL1SpringTester}
            pageTitle   = {CompanyMenu.pageData[0].mEL1SpringTester.title}
            pageBody    = {CompanyMenu.pageData[0].mEL1SpringTester.body}
            items       = {CompanyMenu.pageData[0].mEL1SpringTester.items}
            data        = {CompanyMenu.pageData[0].mEL1SpringTester.items}
        />
    )  
}

export default MEL1SpringTesterPage;