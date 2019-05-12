import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M3900NVHDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].m3900nyhDyno}
            pageTitle   = {BrakesSubMenuData.pageData[0].m3900nyhDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m3900nyhDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m3900nyhDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m3900nyhDyno.items}
        />
    )  
}

export default M3900NVHDynoPage;