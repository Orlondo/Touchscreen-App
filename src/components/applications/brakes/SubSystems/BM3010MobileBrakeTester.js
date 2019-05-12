import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const BM3010MobileBrakeTester = (props) => {
    return ( 
        <ItemButtonGenerator
            sectionData = {BrakesSubMenuData.pageData[0].bm3010MobileBrakeTester}
            pageTitle   = {BrakesSubMenuData.pageData[0].bm3010MobileBrakeTester.title}
            pageBody    = {BrakesSubMenuData.pageData[0].bm3010MobileBrakeTester.body}
            items       = {BrakesSubMenuData.pageData[0].bm3010MobileBrakeTester.items}
            data        = {BrakesSubMenuData.pageData[0].bm3010MobileBrakeTester.items}
        />
    )  
}

export default BM3010MobileBrakeTester;