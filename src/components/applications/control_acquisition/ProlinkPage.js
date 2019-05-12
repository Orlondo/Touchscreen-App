import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ProlinkPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].prolink}
            pageTitle   = {CompanyMenu.pageData[0].prolink.title}
            pageBody    = {CompanyMenu.pageData[0].prolink.body}
            items       = {CompanyMenu.pageData[0].prolink.items}
            data        = {CompanyMenu.pageData[0].prolink.items}
        />
    )  
}

export default ProlinkPage;