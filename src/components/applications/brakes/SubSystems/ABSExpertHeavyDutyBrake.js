import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const ABSExpertHeavyDutyBrake = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].absExpertHeavyDutyBrakeDiagnosticTool}
            pageTitle   = {BrakesSubMenuData.pageData[0].absExpertHeavyDutyBrakeDiagnosticTool.title}
            pageBody    = {BrakesSubMenuData.pageData[0].absExpertHeavyDutyBrakeDiagnosticTool.body}
            items       = {BrakesSubMenuData.pageData[0].absExpertHeavyDutyBrakeDiagnosticTool.items}
            data        = {BrakesSubMenuData.pageData[0].absExpertHeavyDutyBrakeDiagnosticTool.items}
        />
    )  
}

export default ABSExpertHeavyDutyBrake;