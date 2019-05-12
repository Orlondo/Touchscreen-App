import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const offRoadPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].offRoad.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].offRoad}
                pageTitle   = {MenuData.pageData[0].offRoad.title}
                pageBody    = {MenuData.pageData[0].offRoad.body}
                items       = {MenuData.pageData[0].offRoad.items}
                data        = {MenuData.pageData[0].offRoad.items}
            />
        </div>
    )  
}

export default offRoadPage;