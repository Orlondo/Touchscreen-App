import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SAENo2TestStandPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].saeNo2TestStand}
            pageTitle   = {CompanyMenu.pageData[0].saeNo2TestStand.title}
            pageBody    = {CompanyMenu.pageData[0].saeNo2TestStand.body}
            items       = {CompanyMenu.pageData[0].saeNo2TestStand.items}
            data        = {CompanyMenu.pageData[0].saeNo2TestStand.items}
        />
    )  
}

export default SAENo2TestStandPage;