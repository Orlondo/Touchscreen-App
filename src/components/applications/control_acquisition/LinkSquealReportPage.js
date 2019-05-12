import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LinkSquealReportPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].linkSquealReport}
            pageTitle   = {CompanyMenu.pageData[0].linkSquealReport.title}
            pageBody    = {CompanyMenu.pageData[0].linkSquealReport.body}
            items       = {CompanyMenu.pageData[0].linkSquealReport.items}
            data        = {CompanyMenu.pageData[0].linkSquealReport.items}
        />
    )  
}

export default LinkSquealReportPage;