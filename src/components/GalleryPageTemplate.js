import React from 'react';
import CompanyMenu from '../data/ApplicationsMenuData';
import ItemButtonGenerator from './ItemButtonGenerator';

const GallaryPageTemplate = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].ballJoints.title}
            pageBody    = {CompanyMenu.pageData[0].ballJoints.body}
            items       = {CompanyMenu.pageData[0].ballJoints.items}
            data        = {CompanyMenu.pageData[0].ballJoints.items}
        />
    )     
}

export default GallaryPageTemplate;