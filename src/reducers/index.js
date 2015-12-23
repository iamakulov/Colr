import { combineReducers } from 'redux';
import pageReducer from './page.js';
import rememberReducer from './remember.js';
import restoreReducer from './restore.js';
import configReducer from './config.js';

const reducer = combineReducers({
    page: pageReducer,
    remember: rememberReducer,
    restore: restoreReducer,
    config: configReducer
});

export default reducer;