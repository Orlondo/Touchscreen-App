import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Exciter3dPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].exciter3d}
            pageTitle   = {CompanyMenu.pageData[0].exciter3d.title}
            pageBody    = {CompanyMenu.pageData[0].exciter3d.body}
            items       = {CompanyMenu.pageData[0].exciter3d.items}
            data        = {CompanyMenu.pageData[0].exciter3d.items}
        />
    )  
}

export default Exciter3dPage;