import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M2000FrictionStandardDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m200FrictionStandardsDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m200FrictionStandardsDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m200FrictionStandardsDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m200FrictionStandardsDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m200FrictionStandardsDyno.items}
        />
    )  
}

export default M2000FrictionStandardDynoPage;