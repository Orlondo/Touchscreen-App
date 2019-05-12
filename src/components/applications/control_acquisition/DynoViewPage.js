import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const DynoViewPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].dynoView}
            pageTitle   = {CompanyMenu.pageData[0].dynoView.title}
            pageBody    = {CompanyMenu.pageData[0].dynoView.body}
            items       = {CompanyMenu.pageData[0].dynoView.items}
            data        = {CompanyMenu.pageData[0].dynoView.items}
        />
    )  
}

export default DynoViewPage;