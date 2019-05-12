import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M2190AutoTransHighSpeedPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m2190AutoTransHighSpeed}
            pageTitle   = {CompanyMenu.pageData[0].m2190AutoTransHighSpeed.title}
            pageBody    = {CompanyMenu.pageData[0].m2190AutoTransHighSpeed.body}
            items       = {CompanyMenu.pageData[0].m2190AutoTransHighSpeed.items}
            data        = {CompanyMenu.pageData[0].m2190AutoTransHighSpeed.items}
        />
    )  
}

export default M2190AutoTransHighSpeedPage;