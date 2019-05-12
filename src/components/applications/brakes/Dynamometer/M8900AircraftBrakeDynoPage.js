import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M8900AircraftBrakeDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m8900AircraftBrakeDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m8900AircraftBrakeDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m8900AircraftBrakeDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m8900AircraftBrakeDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m8900AircraftBrakeDyno.items}
        />
    )  
}

export default M8900AircraftBrakeDynoPage;