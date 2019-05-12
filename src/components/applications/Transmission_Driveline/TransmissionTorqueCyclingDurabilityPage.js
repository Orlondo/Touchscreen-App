import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TransmissionTorqueCyclingDurabilityPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].transmissionTorqueCyclingDurability}
            pageTitle   = {CompanyMenu.pageData[0].transmissionTorqueCyclingDurability.title}
            pageBody    = {CompanyMenu.pageData[0].transmissionTorqueCyclingDurability.body}
            items       = {CompanyMenu.pageData[0].transmissionTorqueCyclingDurability.items}
            data        = {CompanyMenu.pageData[0].transmissionTorqueCyclingDurability.items}
        />
    )  
}

export default TransmissionTorqueCyclingDurabilityPage;