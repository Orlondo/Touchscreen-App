import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M3000DynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m3000Dyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m3000Dyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m3000Dyno.body}
            items       = {BrakesSubMenuData.pageData[0].m3000Dyno.items}
            data        = {BrakesSubMenuData.pageData[0].m3000Dyno.items}
        />
    )  
}

export default M3000DynoPage;