import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CrossPortBleedPlatesPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].crossPortBleedPlates}
            pageTitle   = {CompanyMenu.pageData[0].crossPortBleedPlates.title}
            pageBody    = {CompanyMenu.pageData[0].crossPortBleedPlates.body}
            items       = {CompanyMenu.pageData[0].crossPortBleedPlates.items}
            data        = {CompanyMenu.pageData[0].crossPortBleedPlates.items}
        />
    )     
}

export default CrossPortBleedPlatesPage;