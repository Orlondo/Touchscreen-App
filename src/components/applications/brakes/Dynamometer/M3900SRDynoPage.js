import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M3900SRDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m3900srDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m3900srDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m3900srDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m3900srDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m3900srDyno.items}
        />
    )  
}

export default M3900SRDynoPage;