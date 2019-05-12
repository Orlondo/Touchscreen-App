import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M4275ethernetPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m4275ethernet}
            pageTitle   = {CompanyMenu.pageData[0].m4275ethernet.title}
            pageBody    = {CompanyMenu.pageData[0].m4275ethernet.body}
            items       = {CompanyMenu.pageData[0].m4275ethernet.items}
            data        = {CompanyMenu.pageData[0].m4275ethernet.items}
        />
    )  
}

export default M4275ethernetPage;