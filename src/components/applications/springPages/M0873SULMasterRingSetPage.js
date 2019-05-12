import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M0873SULMasterRingSetPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m0873SULMasterRingSet}
            pageTitle   = {CompanyMenu.pageData[0].m0873SULMasterRingSet.title}
            pageBody    = {CompanyMenu.pageData[0].m0873SULMasterRingSet.body}
            items       = {CompanyMenu.pageData[0].m0873SULMasterRingSet.items}
            data        = {CompanyMenu.pageData[0].m0873SULMasterRingSet.items}
        />
    )  
}

export default M0873SULMasterRingSetPage;