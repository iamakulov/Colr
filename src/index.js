import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.no-modules.css';
import ColrApp from './components/ColrApp/ColrApp.js';

import config from './config.json';
import configureStore from './store.js';
import { setConfig } from './reducers/config.js';
import { resetGame } from './reducers/common.js';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ColrApp />
        </Provider>,
        document.getElementById('container')
    );
};

store.subscribe(render);
store.dispatch(setConfig(config));
store.dispatch(resetGame());