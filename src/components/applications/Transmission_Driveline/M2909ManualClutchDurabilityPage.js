import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M2909ManualClutchDurabilityPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m2909ManualClutchDurability}
            pageTitle   = {CompanyMenu.pageData[0].m2909ManualClutchDurability.title}
            pageBody    = {CompanyMenu.pageData[0].m2909ManualClutchDurability.body}
            items       = {CompanyMenu.pageData[0].m2909ManualClutchDurability.items}
            data        = {CompanyMenu.pageData[0].m2909ManualClutchDurability.items}
        />
    )  
}

export default M2909ManualClutchDurabilityPage;