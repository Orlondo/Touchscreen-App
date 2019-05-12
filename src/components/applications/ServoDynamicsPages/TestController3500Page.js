import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TestController3500Page = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].testController3500}
            pageTitle   = {CompanyMenu.pageData[0].testController3500.title}
            pageBody    = {CompanyMenu.pageData[0].testController3500.body}
            items       = {CompanyMenu.pageData[0].testController3500.items}
            data        = {CompanyMenu.pageData[0].testController3500.items}
        />
    )     
}

export default TestController3500Page;