import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TrainingPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].training.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].training}
                pageTitle   = {MenuData.pageData[0].training.title}
                pageBody    = {MenuData.pageData[0].training.body}
                items       = {MenuData.pageData[0].training.items}
                data        = {MenuData.pageData[0].training.items}
            />
        </div>
    )  
}

export default TrainingPage;