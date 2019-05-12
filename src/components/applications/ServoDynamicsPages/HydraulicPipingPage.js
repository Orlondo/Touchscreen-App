import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HydraulicPipingPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].hydraulicPiping}
            pageTitle   = {CompanyMenu.pageData[0].hydraulicPiping.title}
            pageBody    = {CompanyMenu.pageData[0].hydraulicPiping.body}
            items       = {CompanyMenu.pageData[0].hydraulicPiping.items}
            data        = {CompanyMenu.pageData[0].hydraulicPiping.items}
        />
    )  
}

export default HydraulicPipingPage;