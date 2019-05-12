import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ChemicalPage = () => {
    return (
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].chemical.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].chemical}
                pageTitle   = {MenuData.pageData[0].chemical.title}
                pageBody    = {MenuData.pageData[0].chemical.body}
                items       = {MenuData.pageData[0].chemical.items}
                data        = {MenuData.pageData[0].chemical.items}
            />
        </div>
    )  
}

export default ChemicalPage;