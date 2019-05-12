import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const RevdataPlusPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].revdataPlus}
            pageTitle   = {CompanyMenu.pageData[0].revdataPlus.title}
            pageBody    = {CompanyMenu.pageData[0].revdataPlus.body}
            items       = {CompanyMenu.pageData[0].revdataPlus.items}
            data        = {CompanyMenu.pageData[0].revdataPlus.items}
        />
    )  
}

export default RevdataPlusPage;