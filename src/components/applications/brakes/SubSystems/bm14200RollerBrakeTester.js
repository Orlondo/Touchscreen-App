import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const bm14200RollerBrakeTester = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].bm14200RollerBrakeTester}
            pageTitle   = {BrakesSubMenuData.pageData[0].bm14200RollerBrakeTester.title}
            pageBody    = {BrakesSubMenuData.pageData[0].bm14200RollerBrakeTester.body}
            items       = {BrakesSubMenuData.pageData[0].bm14200RollerBrakeTester.items}
            data        = {BrakesSubMenuData.pageData[0].bm14200RollerBrakeTester.items}
        />
    )  
}

export default bm14200RollerBrakeTester;