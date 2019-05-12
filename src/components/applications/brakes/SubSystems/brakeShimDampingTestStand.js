import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const brakeShimDampingTestStand = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].brakeShimDampingTestStand}
            pageTitle   = {BrakesSubMenuData.pageData[0].brakeShimDampingTestStand.title}
            pageBody    = {BrakesSubMenuData.pageData[0].brakeShimDampingTestStand.body}
            items       = {BrakesSubMenuData.pageData[0].brakeShimDampingTestStand.items}
            data        = {BrakesSubMenuData.pageData[0].brakeShimDampingTestStand.items}
        />
    )  
}

export default brakeShimDampingTestStand;