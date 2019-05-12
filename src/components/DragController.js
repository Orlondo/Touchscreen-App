import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import { TweenMax } from 'gsap';
import Draggable from 'gsap/Draggable';
import ThrowPropsPlugin from '../js/gsap/ThrowPropsPlugin';

export default class DragController extends React.Component {
    constructor(props) {
        super(props);

        this.items = props.itemData;
        this.pageData = props.pageData;
        this.classLabel = props.classLabel;
    }

    enableDrag(props) {
        Draggable.create(this.dragItem, {
            bounds: this.dragContainer, 
            edgeResistance: 0.65,
            type:"x",
            throwProps:true,
            dragClickables: false,
            onDrag:function() {
                console.log(this);
                this._eventTarget.children.pointerEvents = "none";
            },
            allowEventDefault: false,
            allowNativeTouchScrolling:true,
            clickableTest:function(element) {
                console.log(element)
            }
        });
    }

    componentDidMount() {
        this.enableDrag() 
    }

    render() {
        return (
            <div ref={div => (this.dragContainer = div)} className="dragContainer">
                <div 
                    ref={div => (this.dragItem = div)} 
                    className={"dragItem selection-container " + this.classLabel}> 
                    { this.pageData.map((item) =>
                        <NavLink 
                            style={{backgroundImage:`url(${item.backgroundImage})`}}
                            to={item.pathname} 
                            key={item.label} 
                            className="menu-button sub-menu-btn">
                                <span>
                                    {item.label}
                                </span>
                        </NavLink>
                    )}       
                </div>
            </div>
        )
    }
}

