import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M200_600chaseFrictionMaterialPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model200600}
            pageTitle   = {BrakesSubMenuData.pageData[0].model200600.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model200600.body}
            items       = {BrakesSubMenuData.pageData[0].model200600.items}
            data        = {BrakesSubMenuData.pageData[0].model200600.items}
        />
    )  
}

export default M200_600chaseFrictionMaterialPage;