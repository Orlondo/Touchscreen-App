import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TestProcessesPage = () => {
    return (
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].testProcesses.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].testProcesses}
                pageTitle   = {MenuData.pageData[0].testProcesses.title}
                pageBody    = {MenuData.pageData[0].testProcesses.body}
                items       = {MenuData.pageData[0].testProcesses.items}
                data        = {MenuData.pageData[0].testProcesses.items}
            />
        </div>
    )  
}

export default TestProcessesPage;