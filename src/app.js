// @ts-check

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Router from './Routers/Router';

import 'bootstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<Router />, document.getElementById('app')); 