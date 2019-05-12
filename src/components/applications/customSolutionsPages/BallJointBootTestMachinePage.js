import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BallJointBootTestMachinePage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].ballJointBootTestMachine}
            pageTitle   = {CompanyMenu.pageData[0].ballJointBootTestMachine.title}
            pageBody    = {CompanyMenu.pageData[0].ballJointBootTestMachine.body}
            items       = {CompanyMenu.pageData[0].ballJointBootTestMachine.items}
            data        = {CompanyMenu.pageData[0].ballJointBootTestMachine.items}
        />
    )  
}

export default BallJointBootTestMachinePage;