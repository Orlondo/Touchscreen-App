import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model2864PassiveRoadWheel = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model2864PassiveRoadWheel}
            pageTitle   = {BrakesSubMenuData.pageData[0].model2864PassiveRoadWheel.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model2864PassiveRoadWheel.body}
            items       = {BrakesSubMenuData.pageData[0].model2864PassiveRoadWheel.items}
            data        = {BrakesSubMenuData.pageData[0].model2864PassiveRoadWheel.items}
        />
    )  
}

export default model2864PassiveRoadWheel;