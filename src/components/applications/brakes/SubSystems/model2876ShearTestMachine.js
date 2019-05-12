import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model2876ShearTestMachine = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model2876ShearTestMachine}
            pageTitle   = {BrakesSubMenuData.pageData[0].model2876ShearTestMachine.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model2876ShearTestMachine.body}
            items       = {BrakesSubMenuData.pageData[0].model2876ShearTestMachine.items}
            data        = {BrakesSubMenuData.pageData[0].model2876ShearTestMachine.items}
        />
    )  
}

export default model2876ShearTestMachine;