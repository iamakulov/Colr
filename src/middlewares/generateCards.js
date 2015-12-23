import { START_GAME } from '../reducers/common.js';
import { setColors } from '../reducers/remember.js';

const generateCards = (amount, colors) => {
    return new Array(amount).fill(null).map(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    });
};

const generateCardsMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === START_GAME) {
        const { cardCount, currentColors } = store.getState().config;
        store.dispatch(setColors(generateCards(cardCount, currentColors)));
    }

    return result;
};

export default generateCardsMiddleware;