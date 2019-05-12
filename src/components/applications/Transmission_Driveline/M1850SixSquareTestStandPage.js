import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const M1850SixSquareTestStandPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].m1850SixSquareTestStand}
            pageTitle   = {CompanyMenu.pageData[0].m1850SixSquareTestStand.title}
            pageBody    = {CompanyMenu.pageData[0].m1850SixSquareTestStand.body}
            items       = {CompanyMenu.pageData[0].m1850SixSquareTestStand.items}
            data        = {CompanyMenu.pageData[0].m1850SixSquareTestStand.items}
        />
    )  
}

export default M1850SixSquareTestStandPage;