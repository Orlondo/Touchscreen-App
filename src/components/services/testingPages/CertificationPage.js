import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CertificationPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].certification.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].certification}
                pageTitle   = {MenuData.pageData[0].certification.title}
                pageBody    = {MenuData.pageData[0].certification.body}
                items       = {MenuData.pageData[0].certification.items}
                data        = {MenuData.pageData[0].certification.items}
            />
        </div>
    )  
}

export default CertificationPage;