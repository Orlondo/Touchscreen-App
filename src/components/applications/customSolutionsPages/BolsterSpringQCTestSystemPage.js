import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BolsterSpringQCTestSystemPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].bolsterSpringQCTestSystem}
            pageTitle   = {CompanyMenu.pageData[0].bolsterSpringQCTestSystem.title}
            pageBody    = {CompanyMenu.pageData[0].bolsterSpringQCTestSystem.body}
            items       = {CompanyMenu.pageData[0].bolsterSpringQCTestSystem.items}
            data        = {CompanyMenu.pageData[0].bolsterSpringQCTestSystem.items}
        />
    )  
}

export default BolsterSpringQCTestSystemPage;