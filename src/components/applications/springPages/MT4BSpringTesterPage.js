import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MT4BSpringTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].mT4BSpringTester}
            pageTitle   = {CompanyMenu.pageData[0].mT4BSpringTester.title}
            pageBody    = {CompanyMenu.pageData[0].mT4BSpringTester.body}
            items       = {CompanyMenu.pageData[0].mT4BSpringTester.items}
            data        = {CompanyMenu.pageData[0].mT4BSpringTester.items}
        />
    )  
}

export default MT4BSpringTesterPage;