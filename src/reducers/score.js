import { START_GAME } from './common.js';
export const SET_SCORE = 'SET_SCORE';

const initialState = 0;

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCORE:
            return action.score;
        case START_GAME:
            return initialState;
        default:
            return state;
    }
};

export default scoreReducer;

export const setScore = (score) => ({
    type: SET_SCORE,
    score
});