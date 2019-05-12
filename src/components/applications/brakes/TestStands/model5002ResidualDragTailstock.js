import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const model5002ResidualDragTailstock = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].model5002ResidualDragTailstock}
            pageTitle   = {BrakesSubMenuData.pageData[0].model5002ResidualDragTailstock.title}
            pageBody    = {BrakesSubMenuData.pageData[0].model5002ResidualDragTailstock.body}
            items       = {BrakesSubMenuData.pageData[0].model5002ResidualDragTailstock.items}
            data        = {BrakesSubMenuData.pageData[0].model5002ResidualDragTailstock.items}
        />
    )  
}

export default model5002ResidualDragTailstock;