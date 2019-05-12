import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const AxleTestRigPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].axleTestRig}
            pageTitle   = {CompanyMenu.pageData[0].axleTestRig.title}
            pageBody    = {CompanyMenu.pageData[0].axleTestRig.body}
            items       = {CompanyMenu.pageData[0].axleTestRig.items}
            data        = {CompanyMenu.pageData[0].axleTestRig.items}
        />
    )  
}

export default AxleTestRigPage;