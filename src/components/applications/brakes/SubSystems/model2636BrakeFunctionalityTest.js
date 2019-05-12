import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model2636BrakeFunctionalityTest = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model2636BrakeFunctionalityTestStand}
            pageTitle   = {BrakesSubMenuData.pageData[0].model2636BrakeFunctionalityTestStand.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model2636BrakeFunctionalityTestStand.body}
            items       = {BrakesSubMenuData.pageData[0].model2636BrakeFunctionalityTestStand.items}
            data        = {BrakesSubMenuData.pageData[0].model2636BrakeFunctionalityTestStand.items}
        />
    )  
}

export default model2636BrakeFunctionalityTest;