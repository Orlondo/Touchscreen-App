import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const m7200TrainFullScaleBrakeDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m7200TrainFullScaleBrakeDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m7200TrainFullScaleBrakeDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m7200TrainFullScaleBrakeDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m7200TrainFullScaleBrakeDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m7200TrainFullScaleBrakeDyno.items}
        />
    )  
}

export default m7200TrainFullScaleBrakeDynoPage;