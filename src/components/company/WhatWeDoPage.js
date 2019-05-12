import React from 'react';
import CompanyMenu from '../../data/CompanyMenuData';

const WhatWeDo = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].whatWeDo.backgroundImage})`}}
        >
            <div className="dataBlock-container">
                {CompanyMenu.pageData[0].whatWeDo.title}
                <hr />
                {CompanyMenu.pageData[0].whatWeDo.body}
            </div>
        </div>
    )  
}

export default WhatWeDo;