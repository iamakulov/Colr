import { RESET_GAME } from './common.js';
const SWITCH_TO_NEXT_PAGE = 'SWITCH_TO_NEXT_PAGE';

const initialState = {
    current: 0
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_NEXT_PAGE:
            return {
                ...state,
                current: state.current + 1
            };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
};

export default pageReducer;

export const switchToNextPage = () => ({
    type: SWITCH_TO_NEXT_PAGE
});