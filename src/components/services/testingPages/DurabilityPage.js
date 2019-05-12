import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const DurabilityPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].durability.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].durability}
                pageTitle   = {MenuData.pageData[0].durability.title}
                pageBody    = {MenuData.pageData[0].durability.body}
                items       = {MenuData.pageData[0].durability.items}
                data        = {MenuData.pageData[0].durability.items}
            />
        </div>
        
    )  
}

export default DurabilityPage;