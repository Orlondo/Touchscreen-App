import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const VehicleToDynoPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].vehicleToDyno.backgroundImage})`}}
        >
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].vehicleToDyno}
                pageTitle   = {MenuData.pageData[0].vehicleToDyno.title}
                pageBody    = {MenuData.pageData[0].vehicleToDyno.body}
                items       = {MenuData.pageData[0].vehicleToDyno.items}
                data        = {MenuData.pageData[0].vehicleToDyno.items}
            />
        </div>
    )  
}

export default VehicleToDynoPage;