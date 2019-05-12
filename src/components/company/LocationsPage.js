import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CompanyMenu from '../../data/CompanyMenuData';
import LocationItems from '../../data/LocationItemsData';
import LocationsPageOverrideClass from '../../components/LocationsPageOverrideClass';
import ContentBlock from '../ContentBlock';


const Locations = (props) => {
    return (
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].locations.backgroundImage})`}}
        > 
            <div className="backgroundGradient"></div>
            <LocationsPageOverrideClass
                sectionData             = {CompanyMenu.pageData[0].locations}
                pageTitle               = {CompanyMenu.pageData[0].locations.title}
                pageBody                = {CompanyMenu.pageData[0].locations.body}
                items                   = {LocationItems.data}
                itemContainerHeight     = {{height:25 + '%'}}
                data                    = {CompanyMenu.pageData}
            />
        </div>
    ) 
}

export default Locations;