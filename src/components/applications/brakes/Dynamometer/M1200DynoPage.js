import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M1200DynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m1200Dyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m1200Dyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m1200Dyno.body}
            items       = {BrakesSubMenuData.pageData[0].m1200Dyno.items}
            data        = {BrakesSubMenuData.pageData[0].m1200Dyno.items}
        />
    )  
}

export default M1200DynoPage;