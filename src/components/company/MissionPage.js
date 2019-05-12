import React from 'react';
import CompanyMenu from '../../data/CompanyMenuData';


const Mission = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].mission.backgroundImage})`}}
        >
            <div className="dataBlock-container">
                {CompanyMenu.pageData[0].mission.title}
                {CompanyMenu.pageData[0].mission.body}
            </div>
        </div>
    )  
}

export default Mission;