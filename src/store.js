import { createStore, compose, applyMiddleware } from 'redux';
import generateCards from './middlewares/generateCards.js';
import calculateScore from './middlewares/calculateScore.js';
import createLogger from 'redux-logger';
import reducer from './reducers/index.js';

const configureStore = initialState => {
    const logger = createLogger();

    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(logger, generateCards, calculateScore),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

export default configureStore;