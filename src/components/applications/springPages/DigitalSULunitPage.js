import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const DigitalSULunitPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].digitalSULunit}
            pageTitle   = {CompanyMenu.pageData[0].digitalSULunit.title}
            pageBody    = {CompanyMenu.pageData[0].digitalSULunit.body}
            items       = {CompanyMenu.pageData[0].digitalSULunit.items}
            data        = {CompanyMenu.pageData[0].digitalSULunit.items}
        />
    )  
}

export default DigitalSULunitPage;