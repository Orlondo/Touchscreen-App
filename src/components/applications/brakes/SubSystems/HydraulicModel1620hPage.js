import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const HydraulicModel1620hPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].hydralicModel1620h}
            pageTitle   = {BrakesSubMenuData.pageData[0].hydralicModel1620h.title}
            pageBody    = {BrakesSubMenuData.pageData[0].hydralicModel1620h.body}
            items       = {BrakesSubMenuData.pageData[0].hydralicModel1620h.items}
            data        = {BrakesSubMenuData.pageData[0].hydralicModel1620h.items}
        />
    )  
}

export default HydraulicModel1620hPage;