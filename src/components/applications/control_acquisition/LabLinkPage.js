import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LabLinkPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].labLink}
            pageTitle   = {CompanyMenu.pageData[0].labLink.title}
            pageBody    = {CompanyMenu.pageData[0].labLink.body}
            items       = {CompanyMenu.pageData[0].labLink.items}
            data        = {CompanyMenu.pageData[0].labLink.items}
        />
    )  
}

export default LabLinkPage;