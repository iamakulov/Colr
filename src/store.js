import { createStore, compose, applyMiddleware } from 'redux';
import generateCards from './middlewares/generateCards.js';
import createLogger from 'redux-logger';
import reducer from './reducers/index.js';

const configureStore = initialState => {
    const logger = createLogger();

    return compose(
        applyMiddleware(logger, generateCards),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(reducer, initialState);
};

export default configureStore;