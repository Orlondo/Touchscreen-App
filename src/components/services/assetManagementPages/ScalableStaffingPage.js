import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ScalableStaffingPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].scalableStaffing.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].scalableStaffing}
                pageTitle   = {MenuData.pageData[0].scalableStaffing.title}
                pageBody    = {MenuData.pageData[0].scalableStaffing.body}
                items       = {MenuData.pageData[0].scalableStaffing.items}
                data        = {MenuData.pageData[0].scalableStaffing.items}
            />
        </div>
    )  
}

export default ScalableStaffingPage;