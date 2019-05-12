import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ScriptEditPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].scriptEdit}
            pageTitle   = {CompanyMenu.pageData[0].scriptEdit.title}
            pageBody    = {CompanyMenu.pageData[0].scriptEdit.body}
            items       = {CompanyMenu.pageData[0].scriptEdit.items}
            data        = {CompanyMenu.pageData[0].scriptEdit.items}
        />
    )  
}

export default ScriptEditPage;