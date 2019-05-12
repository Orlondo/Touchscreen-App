import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model20200RollerBrakeTester = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model20200RollerBrakeTester}
            pageTitle   = {BrakesSubMenuData.pageData[0].model20200RollerBrakeTester.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model20200RollerBrakeTester.body}
            items       = {BrakesSubMenuData.pageData[0].model20200RollerBrakeTester.items}
            data        = {BrakesSubMenuData.pageData[0].model20200RollerBrakeTester.items}
        />
    )  
}

export default model20200RollerBrakeTester;