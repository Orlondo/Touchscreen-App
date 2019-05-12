import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const airSystemExpert = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].airSystemExpert}
            pageTitle   = {BrakesSubMenuData.pageData[0].airSystemExpert.title}
            pageBody    = {BrakesSubMenuData.pageData[0].airSystemExpert.body}
            items       = {BrakesSubMenuData.pageData[0].airSystemExpert.items}
            data        = {BrakesSubMenuData.pageData[0].airSystemExpert.items}
        />
    )  
}

export default airSystemExpert;