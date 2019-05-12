import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const PerformancePage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].perfomance.backgroundImage})`}}
        >   
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].perfomance}
                pageTitle   = {MenuData.pageData[0].perfomance.title}
                pageBody    = {MenuData.pageData[0].perfomance.body}
                items       = {MenuData.pageData[0].perfomance.items}
                data        = {MenuData.pageData[0].perfomance.items}
            />
        </div>
        
    )  
}

export default PerformancePage;