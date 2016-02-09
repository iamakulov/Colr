import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import ColrApp from './components/ColrApp/ColrApp.js';

import config from './config.json';
import configureStore from './store.js';
import { setConfig } from './reducers/config.js';
import { startGame } from './reducers/common.js';

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
store.dispatch(startGame());