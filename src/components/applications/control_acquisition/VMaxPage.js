import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const VMaxPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].vMax}
            pageTitle   = {CompanyMenu.pageData[0].vMax.title}
            pageBody    = {CompanyMenu.pageData[0].vMax.body}
            items       = {CompanyMenu.pageData[0].vMax.items}
            data        = {CompanyMenu.pageData[0].vMax.items}
        />
    )  
}

export default VMaxPage;