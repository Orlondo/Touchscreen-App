import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const RWS100B = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].RWS100B}
            pageTitle   = {BrakesSubMenuData.pageData[0].RWS100B.title}
            pageBody    = {BrakesSubMenuData.pageData[0].RWS100B.body}
            items       = {BrakesSubMenuData.pageData[0].RWS100B.items}
            data        = {BrakesSubMenuData.pageData[0].RWS100B.items}
        />
    )  
}

export default RWS100B;