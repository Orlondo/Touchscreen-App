import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3315RotorMappingStation = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3315RotorMappingStation}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3315RotorMappingStation.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3315RotorMappingStation.body}
            items       = {BrakesSubMenuData.pageData[0].model3315RotorMappingStation.items}
            data        = {BrakesSubMenuData.pageData[0].model3315RotorMappingStation.items}
        />
    )  
}

export default model3315RotorMappingStation;