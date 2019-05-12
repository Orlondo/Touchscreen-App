import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Force_MotionTireTestingSystem = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].Force_MotionTireTestingSystem}
            pageTitle   = {CompanyMenu.pageData[0].Force_MotionTireTestingSystem.title}
            pageBody    = {CompanyMenu.pageData[0].Force_MotionTireTestingSystem.body}
            items       = {CompanyMenu.pageData[0].Force_MotionTireTestingSystem.items}
            data        = {CompanyMenu.pageData[0].Force_MotionTireTestingSystem.items}
        />
    )  
}

export default Force_MotionTireTestingSystem;