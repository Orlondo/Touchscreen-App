import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Structural_FatiguePage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].structural_fatigue.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].structural_fatigue}
                pageTitle   = {MenuData.pageData[0].structural_fatigue.title}
                pageBody    = {MenuData.pageData[0].structural_fatigue.body}
                items       = {MenuData.pageData[0].structural_fatigue.items}
                data        = {MenuData.pageData[0].structural_fatigue.items}
            />
        </div>
    )  
}

export default Structural_FatiguePage;