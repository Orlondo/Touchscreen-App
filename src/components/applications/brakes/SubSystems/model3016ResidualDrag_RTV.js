import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3016ResidualDrag_RTV = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3016ResidalDragAndRTVMachine}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3016ResidalDragAndRTVMachine.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3016ResidalDragAndRTVMachine.body}
            items       = {BrakesSubMenuData.pageData[0].model3016ResidalDragAndRTVMachine.items}
            data        = {BrakesSubMenuData.pageData[0].model3016ResidalDragAndRTVMachine.items}
        />
    )  
}

export default model3016ResidualDrag_RTV;