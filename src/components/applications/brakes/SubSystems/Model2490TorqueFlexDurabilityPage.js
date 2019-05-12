import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const Model2490TorqueFlexDurabilityPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model2490TorqueFlexDurabilityMachine}
            pageTitle   = {BrakesSubMenuData.pageData[0].model2490TorqueFlexDurabilityMachine.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model2490TorqueFlexDurabilityMachine.body}
            items       = {BrakesSubMenuData.pageData[0].model2490TorqueFlexDurabilityMachine.items}
            data        = {BrakesSubMenuData.pageData[0].model2490TorqueFlexDurabilityMachine.items}
        />
    )  
}

export default Model2490TorqueFlexDurabilityPage;