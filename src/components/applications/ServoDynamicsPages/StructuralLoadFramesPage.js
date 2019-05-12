import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const StructuralLoadFramesPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].structuralLoadFrames}
            pageTitle   = {CompanyMenu.pageData[0].structuralLoadFrames.title}
            pageBody    = {CompanyMenu.pageData[0].structuralLoadFrames.body}
            items       = {CompanyMenu.pageData[0].structuralLoadFrames.items}
            data        = {CompanyMenu.pageData[0].structuralLoadFrames.items}
        />
    )  
}

export default StructuralLoadFramesPage;