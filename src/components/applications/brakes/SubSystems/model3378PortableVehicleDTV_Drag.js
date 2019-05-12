import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3378PortableVehicleDTV_Drag = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3378PortableVehicleDTVandDragTester}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3378PortableVehicleDTVandDragTester.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3378PortableVehicleDTVandDragTester.body}
            items       = {BrakesSubMenuData.pageData[0].model3378PortableVehicleDTVandDragTester.items}
            data        = {BrakesSubMenuData.pageData[0].model3378PortableVehicleDTVandDragTester.items}
        />
    )  
}

export default model3378PortableVehicleDTV_Drag;