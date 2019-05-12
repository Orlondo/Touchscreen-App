import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MeasurementPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].measurement.backgroundImage})`}}
        >
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].measurement}
                pageTitle   = {MenuData.pageData[0].measurement.title}
                pageBody    = {MenuData.pageData[0].measurement.body}
                items       = {MenuData.pageData[0].measurement.items}
                data        = {MenuData.pageData[0].measurement.items}
            />
        </div>
    )  
}

export default MeasurementPage;