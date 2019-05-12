import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const shapix1500 = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].shapix1500}
            pageTitle   = {BrakesSubMenuData.pageData[0].shapix1500.title}
            pageBody    = {BrakesSubMenuData.pageData[0].shapix1500.body}
            items       = {BrakesSubMenuData.pageData[0].shapix1500.items}
            data        = {BrakesSubMenuData.pageData[0].shapix1500.items}
        />
    )  
}

export default shapix1500;