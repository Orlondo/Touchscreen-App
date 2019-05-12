import React from 'react';
import CompanyMenu from '../../data/CompanyMenuData';

const Customers = (props) => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].customers.backgroundImage})`}}
        >
            <div className="dataBlock-container">
                {CompanyMenu.pageData[0].customers.title}
                <hr />
                {CompanyMenu.pageData[0].customers.body}
            </div>
        </div>
    )  
}

export default Customers;