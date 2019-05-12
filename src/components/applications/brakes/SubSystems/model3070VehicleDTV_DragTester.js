import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3070VehicleDTV_DragTester = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3070VehicleDTVandDragTester}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3070VehicleDTVandDragTester.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3070VehicleDTVandDragTester.body}
            items       = {BrakesSubMenuData.pageData[0].model3070VehicleDTVandDragTester.items}
            data        = {BrakesSubMenuData.pageData[0].model3070VehicleDTVandDragTester.items}
        />
    )  
}

export default model3070VehicleDTV_DragTester;