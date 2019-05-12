import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model100FastMachine = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model100FastMachine}
            pageTitle   = {BrakesSubMenuData.pageData[0].model100FastMachine.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model100FastMachine.body}
            items       = {BrakesSubMenuData.pageData[0].model100FastMachine.items}
            data        = {BrakesSubMenuData.pageData[0].model100FastMachine.items}
        />
    )  
}

export default model100FastMachine;