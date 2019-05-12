import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BallJointBootTestSystemPage_TD = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].ballJointBootTestSystem}
            pageTitle   = {CompanyMenu.pageData[0].ballJointBootTestSystem.title}
            pageBody    = {CompanyMenu.pageData[0].ballJointBootTestSystem.body}
            items       = {CompanyMenu.pageData[0].ballJointBootTestSystem.items}
            data        = {CompanyMenu.pageData[0].ballJointBootTestSystem.items}
        />
    )  
}

export default BallJointBootTestSystemPage_TD;