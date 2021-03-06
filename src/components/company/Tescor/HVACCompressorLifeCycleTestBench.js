import React from 'react';
import CompanyMenu from '../../../data/CompanyMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HVACCompressorLifeCycleTestBench = (props) => {

    const dataPath = CompanyMenu.pageData[0].tescor.pageData[0].HVACCompressorLifeCycleTestBench;
    
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].tescor.backgroundImage})`}}
        > 
        <div className="backgroundGradient"></div>
        <ItemButtonGenerator
            sectionData = {dataPath}
            pageTitle   = {dataPath.title}
            pageBody    = {dataPath.body}
            items       = {dataPath.items}
            data        = {dataPath.items}
        />
        </div>
    )  
}

export default HVACCompressorLifeCycleTestBench;