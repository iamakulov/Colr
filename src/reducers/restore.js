import { START_GAME } from './common.js';
const ADD_GUESS = 'ADD_GUESS';
const RESTORE_SWITCH_TO_BLOCK = 'RESTORE_SWITCH_TO_BLOCK';

const initialState = {
    currentBlock: 0,
    list: []
};

const restoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GUESS:
            return {
                ...state,
                list: [...state.list, action.color]
            };
        case RESTORE_SWITCH_TO_BLOCK:
            return {
                ...state,
                currentBlock: action.index
            };
        case START_GAME:
            return initialState;
        default:
            return state;
    }
};

export default restoreReducer;

export const addGuess = (color) => ({
    type: ADD_GUESS,
    color
});

export const switchToBlock = (index) => ({
    type: RESTORE_SWITCH_TO_BLOCK,
    index
});