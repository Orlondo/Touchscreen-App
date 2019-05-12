import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model3945RoadLoadSimulation = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model3945RoadLoadSimulationSystem}
            pageTitle   = {BrakesSubMenuData.pageData[0].model3945RoadLoadSimulationSystem.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model3945RoadLoadSimulationSystem.body}
            items       = {BrakesSubMenuData.pageData[0].model3945RoadLoadSimulationSystem.items}
            data        = {BrakesSubMenuData.pageData[0].model3945RoadLoadSimulationSystem.items}
        />
    )  
}

export default model3945RoadLoadSimulation;