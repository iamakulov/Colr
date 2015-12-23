import { START_GAME } from './common.js';
const SET_SCORE = 'SET_SCORE';

const initialState = {
    current: 0,
    latestAdded: 0
};

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCORE:
            return {
                ...state,
                current: action.score,
                latestAdded: Math.max(action.score - state.current, 0)
            };
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