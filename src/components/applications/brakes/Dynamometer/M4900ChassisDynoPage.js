import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M4900ChassisDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m4900ChassisDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m4900ChassisDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m4900ChassisDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m4900ChassisDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m4900ChassisDyno.items}
        />
    )  
}

export default M4900ChassisDynoPage;