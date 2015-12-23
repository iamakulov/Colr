const SET_CONFIG = 'SET_CONFIG';

const initialState = {};

const configReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                ...action.config
            };
        default:
            return state;
    }
};

export default configReducer;

export const setConfig = (config) => ({
    type: SET_CONFIG,
    config
});