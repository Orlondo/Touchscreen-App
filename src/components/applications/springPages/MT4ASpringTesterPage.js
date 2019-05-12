import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MT4ASpringTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].mT4BSpringTester}
            pageTitle   = {CompanyMenu.pageData[0].mT4ASpringTester.title}
            pageBody    = {CompanyMenu.pageData[0].mT4ASpringTester.body}
            items       = {CompanyMenu.pageData[0].mT4ASpringTester.items}
            data        = {CompanyMenu.pageData[0].mT4ASpringTester.items}
        />
    )  
}

export default MT4ASpringTesterPage;