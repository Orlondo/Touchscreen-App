import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3394NVHMasterCylinderTest = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3394NVHMasterCylinderTestStand}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3394NVHMasterCylinderTestStand.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3394NVHMasterCylinderTestStand.body}
            items       = {BrakesSubMenuData.pageData[0].model3394NVHMasterCylinderTestStand.items}
            data        = {BrakesSubMenuData.pageData[0].model3394NVHMasterCylinderTestStand.items}
        />
    )  
}

export default model3394NVHMasterCylinderTest;