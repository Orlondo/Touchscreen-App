import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const RegensimPage = () => {
    return ( 
        <ItemButtonGenerator
            sectionData = {CompanyMenu.pageData[0].regensim}
            pageTitle   = {CompanyMenu.pageData[0].regensim.title}
            pageBody    = {CompanyMenu.pageData[0].regensim.body}
            items       = {CompanyMenu.pageData[0].regensim.items}
            data        = {CompanyMenu.pageData[0].regensim.items}
        />
    )  
}

export default RegensimPage;