import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LCALinearServoRatedActuator = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].lcaLinearServoRatedActuator}
            pageTitle   = {CompanyMenu.pageData[0].lcaLinearServoRatedActuator.title}
            pageBody    = {CompanyMenu.pageData[0].lcaLinearServoRatedActuator.body}
            items       = {CompanyMenu.pageData[0].lcaLinearServoRatedActuator.items}
            data        = {CompanyMenu.pageData[0].lcaLinearServoRatedActuator.items}
        />
    )  
}

export default LCALinearServoRatedActuator;