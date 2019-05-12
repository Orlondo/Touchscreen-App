import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SwivelsPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].ballJoints}
            pageTitle   = {CompanyMenu.pageData[0].ballJoints.title}
            pageBody    = {CompanyMenu.pageData[0].ballJoints.body}
            items       = {CompanyMenu.pageData[0].ballJoints.items}
            data        = {CompanyMenu.pageData[0].ballJoints.items}
        />
    )     
}

export default SwivelsPage;