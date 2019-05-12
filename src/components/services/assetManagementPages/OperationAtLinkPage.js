import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const OperationAtLinkPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].operationsAtLink.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].operationsAtLink}
                pageTitle   = {MenuData.pageData[0].operationsAtLink.title}
                pageBody    = {MenuData.pageData[0].operationsAtLink.body}
                items       = {MenuData.pageData[0].operationsAtLink.items}
                data        = {MenuData.pageData[0].operationsAtLink.items}
            />
        </div>
    )  
}

export default OperationAtLinkPage;