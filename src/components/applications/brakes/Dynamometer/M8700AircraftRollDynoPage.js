import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const m8700AircraftRollDyno = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m8700AircraftRollDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m8700AircraftRollDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m8700AircraftRollDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m8700AircraftRollDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m8700AircraftRollDyno.items}
        />
    )  
}

export default m8700AircraftRollDyno;