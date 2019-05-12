import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M1450LowPressureRotorWearPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].mode1450LowPressureRotor}
            pageTitle   = {BrakesSubMenuData.pageData[0].mode1450LowPressureRotor.title}
            pageBody    = {BrakesSubMenuData.pageData[0].mode1450LowPressureRotor.body}
            items       = {BrakesSubMenuData.pageData[0].mode1450LowPressureRotor.items}
            data        = {BrakesSubMenuData.pageData[0].mode1450LowPressureRotor.items}
        />
    )  
}

export default M1450LowPressureRotorWearPage;