import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SeatVibrationTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].seatVibrationTester}
            pageTitle   = {CompanyMenu.pageData[0].seatVibrationTester.title}
            pageBody    = {CompanyMenu.pageData[0].seatVibrationTester.body}
            items       = {CompanyMenu.pageData[0].seatVibrationTester.items}
            data        = {CompanyMenu.pageData[0].seatVibrationTester.items}
        />
    )  
}

export default SeatVibrationTesterPage;