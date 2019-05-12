import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TwoSquarePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].twoSquare}
            pageTitle   = {CompanyMenu.pageData[0].twoSquare.title}
            pageBody    = {CompanyMenu.pageData[0].twoSquare.body}
            items       = {CompanyMenu.pageData[0].twoSquare.items}
            data        = {CompanyMenu.pageData[0].twoSquare.items}
        />
    )  
}

export default TwoSquarePage;