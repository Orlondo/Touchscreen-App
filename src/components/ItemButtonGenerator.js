import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

export default class ItemButtonGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.subSection             = props.sectionData.subSection;
        this.brakesSubSection       = props.sectionData.brakesSubSection;
        this.items                  = props.items;
        this.data                   = props.data;
        this.itemContainerHeight    = props.itemContainerHeight;
        this.pageTitle              = props.pageTitle;
        this.pageBody               = props.pageBody;
        this.DataBlockContainer     = this.DataBlockContainer.bind(this);
        this.SelectedItemContainer  = this.SelectedItemContainer.bind(this);
        this.ItemButtonContainer    = this.ItemButtonContainer.bind(this);
        this.handleItemButton       = this.handleItemButton.bind(this);

        this.dragItem = [];

        this.state = {
            title: this.items[0].title,
            subTitle: this.items[0].subTitle,
            address1: this.items[0].address1,
            address2: this.items[0].address2,
            address3: this.items[0].address3,
            phoneNumber: this.items[0].phoneNumber,
            roll1: this.items[0].roll1,
            roll2: this.items[0].roll2,
            roll3: this.items[0].roll3,
            roll4: this.items[0].roll4,
            roll5: this.items[0].roll5,
            media: this.items[0].media
        }
    }

    handleItemButton(e, props) {
        let item = e.target.getAttribute('data-id');

        this.setState(() => {
            return {
                title: this.items[item].title,
                subTitle: this.items[item].subTitle,
                address1: this.items[item].address1,
                address2: this.items[item].address2,
                address3: this.items[item].address3,
                phoneNumber: this.items[item].phoneNumber,
                roll1: this.items[item].roll1,
                roll2: this.items[item].roll2,
                roll3: this.items[item].roll3,
                roll4: this.items[item].roll4,
                roll5: this.items[item].roll5,
                media: this.items[item].media
            }
        })
    }

    DataBlockContainer(props) {
        return (         
            <div className="dataBlock-container">
                <h2>{this.pageTitle}</h2>
                <hr />
                {this.pageBody}
                <br />
                <div className="dataBlock">
                    <h2>{this.state.title}</h2>
                    {this.state.subTitle}
                    {this.state.address1}
                    {this.state.address2}
                    {this.state.address3}
                    {this.state.phoneNumber} 
                    <br />
                    {this.state.roll1}
                    {this.state.roll2}
                    {this.state.roll3}
                    {this.state.roll4}
                    {this.state.roll5}           
                </div> 
            </div>
        )
    }

    BreadcrumbController = (props) => {
        return (
            <div className="breadcrumb-container">
                <p>{this.subSection} &#x2022; {this.brakesSubSection} {this.pageTitle}</p>
            </div>
        )
    }

    SelectedItemContainer(props) {
        return (
            <div className="selectedItem-container">
                {this.state.media}
            </div>
        )
    }

    ItemButtonContainer(props) {
        return (
            <div className="item-container" style={this.itemContainerHeight}>
                {this.items.map((item, index) => 
                    <button 
                        ref={div => (this.dragItem[index] = div)} 
                        style={{backgroundImage:`url(${item.backgroundImage})`}}
                        onClick={this.handleItemButton} 
                        className="itemMenu-btn"
                        data-id={index}>
                            {item.buttonLabel}
                    </button>
                )}
            </div>
        )
    }

    render(props) {
        return (
            <div class="scene">
                <this.DataBlockContainer />
                <div className="gallery-container">
                    <this.BreadcrumbController />
                    <this.SelectedItemContainer />
                    <this.ItemButtonContainer />
                </div>
            </div>         
        )
    }
}