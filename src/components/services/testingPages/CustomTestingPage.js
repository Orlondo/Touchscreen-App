import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CustomTestingPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].customTesting.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].customTesting}
                pageTitle   = {MenuData.pageData[0].customTesting.title}
                pageBody    = {MenuData.pageData[0].customTesting.body}
                items       = {MenuData.pageData[0].customTesting.items}
                data        = {MenuData.pageData[0].customTesting.items}
            />
        </div>
    )  
}

export default CustomTestingPage;