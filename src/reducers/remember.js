import { RESET_GAME } from './common.js';

const REMEMBER_SWITCH_TO_BLOCK = 'REMEMBER_SWITCH_TO_BLOCK';
const SET_COLORS = 'SET_COLORS';

const initialState = {
    currentBlock: 0,
    list: []
};

const rememberReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMEMBER_SWITCH_TO_BLOCK:
            return {
                ...state,
                currentBlock: action.index
            };
        case SET_COLORS:
            return {
                ...state,
                list: action.colors
            };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
};

export default rememberReducer;

export const switchToBlock = (index) => ({
    type: REMEMBER_SWITCH_TO_BLOCK,
    index
});

export const setColors = (colors) => ({
    type: SET_COLORS,
    colors
});