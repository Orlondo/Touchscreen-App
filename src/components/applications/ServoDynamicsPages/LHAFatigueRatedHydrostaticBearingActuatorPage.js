import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const LHAFatigueRatedHydrostaticBearingActuatorPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].lhaFatigueRatedHydrostaticBearingActuator}
            pageTitle   = {CompanyMenu.pageData[0].lhaFatigueRatedHydrostaticBearingActuator.title}
            pageBody    = {CompanyMenu.pageData[0].lhaFatigueRatedHydrostaticBearingActuator.body}
            items       = {CompanyMenu.pageData[0].lhaFatigueRatedHydrostaticBearingActuator.items}
            data        = {CompanyMenu.pageData[0].lhaFatigueRatedHydrostaticBearingActuator.items}
        />
    )  
}

export default LHAFatigueRatedHydrostaticBearingActuatorPage;