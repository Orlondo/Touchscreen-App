import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const liningWearMappingStation = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].liningWearMappingStation}
            pageTitle   = {BrakesSubMenuData.pageData[0].liningWearMappingStation.title}
            pageBody    = {BrakesSubMenuData.pageData[0].liningWearMappingStation.body}
            items       = {BrakesSubMenuData.pageData[0].liningWearMappingStation.items}
            data        = {BrakesSubMenuData.pageData[0].liningWearMappingStation.items}
        />
    )  
}

export default liningWearMappingStation;