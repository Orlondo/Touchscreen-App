import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model2552BoosterTestStand = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model2552BoosterTestStand}
            pageTitle   = {BrakesSubMenuData.pageData[0].model2552BoosterTestStand.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model2552BoosterTestStand.body}
            items       = {BrakesSubMenuData.pageData[0].model2552BoosterTestStand.items}
            data        = {BrakesSubMenuData.pageData[0].model2552BoosterTestStand.items}
        />
    )  
}

export default model2552BoosterTestStand;