import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const Model1620CompressibilityMachinePage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model1620CompressibilityMachine}
            pageTitle   = {BrakesSubMenuData.pageData[0].model1620CompressibilityMachine.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model1620CompressibilityMachine.body}
            items       = {BrakesSubMenuData.pageData[0].model1620CompressibilityMachine.items}
            data        = {BrakesSubMenuData.pageData[0].model1620CompressibilityMachine.items}
        />
    )  
}

export default Model1620CompressibilityMachinePage;