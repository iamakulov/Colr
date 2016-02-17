import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index.js';
import calculateScore from './sagas/calculateScore.js';
import generateCards from './sagas/generateCards.js';

const configureStore = initialState => {
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware(calculateScore, generateCards);

    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

export default configureStore;