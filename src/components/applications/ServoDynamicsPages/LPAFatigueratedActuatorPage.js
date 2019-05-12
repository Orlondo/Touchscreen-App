import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LPAFatigueratedActuatorPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].lpaFatigueratedActuator}
            pageTitle   = {CompanyMenu.pageData[0].lpaFatigueratedActuator.title}
            pageBody    = {CompanyMenu.pageData[0].lpaFatigueratedActuator.body}
            items       = {CompanyMenu.pageData[0].lpaFatigueratedActuator.items}
            data        = {CompanyMenu.pageData[0].lpaFatigueratedActuator.items}
        />
    )  
}

export default LPAFatigueratedActuatorPage;