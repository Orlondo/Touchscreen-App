import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const NVHPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].nvh.backgroundImage})`}}
        >   
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].nvh}
                pageTitle   = {MenuData.pageData[0].nvh.title}
                pageBody    = {MenuData.pageData[0].nvh.body}
                items       = {MenuData.pageData[0].nvh.items}
                data        = {MenuData.pageData[0].nvh.items}
            />
        </div>
        
    )  
}

export default NVHPage;