import React from 'react';
import MenuData from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const VehicleDynamicsPage = () => {
    return (
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuData.pageData[0].vehicleDynamics.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <ItemButtonGenerator
                sectionData = {MenuData.pageData[0].vehicleDynamics}
                pageTitle   = {MenuData.pageData[0].vehicleDynamics.title}
                pageBody    = {MenuData.pageData[0].vehicleDynamics.body}
                items       = {MenuData.pageData[0].vehicleDynamics.items}
                data        = {MenuData.pageData[0].vehicleDynamics.items}
            />
        </div>
    )  
}

export default VehicleDynamicsPage;