import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TableTopLoadFramePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].tableTopLoadFrame}
            pageTitle   = {CompanyMenu.pageData[0].tableTopLoadFrame.title}
            pageBody    = {CompanyMenu.pageData[0].tableTopLoadFrame.body}
            items       = {CompanyMenu.pageData[0].tableTopLoadFrame.items}
            data        = {CompanyMenu.pageData[0].tableTopLoadFrame.items}
        />
    )  
}

export default TableTopLoadFramePage;