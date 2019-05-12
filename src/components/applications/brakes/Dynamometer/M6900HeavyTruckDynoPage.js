import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M6900HeavyTruckDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m6900HeavyTruckDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m6900HeavyTruckDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m6900HeavyTruckDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m6900HeavyTruckDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m6900HeavyTruckDyno.items}
        />
    )  
}

export default M6900HeavyTruckDynoPage;