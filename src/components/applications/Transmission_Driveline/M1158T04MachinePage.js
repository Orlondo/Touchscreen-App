import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M1158T04MachinePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m1158T04Machine}
            pageTitle   = {CompanyMenu.pageData[0].m1158T04Machine.title}
            pageBody    = {CompanyMenu.pageData[0].m1158T04Machine.body}
            items       = {CompanyMenu.pageData[0].m1158T04Machine.items}
            data        = {CompanyMenu.pageData[0].m1158T04Machine.items}
        />
    )  
}

export default M1158T04MachinePage;