import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const onRoadPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].onRoad.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].onRoad}
                pageTitle   = {MenuData.pageData[0].onRoad.title}
                pageBody    = {MenuData.pageData[0].onRoad.body}
                items       = {MenuData.pageData[0].onRoad.items}
                data        = {MenuData.pageData[0].onRoad.items}
            />
        </div>
    )  
}

export default onRoadPage;