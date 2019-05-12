import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M1400DynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m1400Dyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m1400Dyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m1400Dyno.body}
            items       = {BrakesSubMenuData.pageData[0].m1400Dyno.items}
            data        = {BrakesSubMenuData.pageData[0].m1400Dyno.items}
        />
    )  
}

export default M1400DynoPage;