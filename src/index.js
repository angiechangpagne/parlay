/**
 * ************************************
 *
 * @module  index.js
 * @author ANGEN
 * @date 
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */


 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import styles from './stylesheets/styles.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);


