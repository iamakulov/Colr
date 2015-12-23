import zip from 'array-zip';
import { ADD_GUESS } from '../reducers/restore.js';
import { setScore } from '../reducers/score.js';

const calculateScore = (cards, guesses) => {
    return zip(guesses, cards)
        .reduce((collector, item) => {
            const [correctValue, guess] = item;
            if (correctValue === guess) {
                return [...collector, collector[collector.length - 1] + 1];
            } else {
                return [...collector, 0];
            }
        }, [0])
        .reduce((sum, i) => sum + i, 0);    // 0 is added to make reduce work with empty initial array
};

const generateCardsMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === ADD_GUESS) {
        const cards = store.getState().remember.list;
        const guesses = store.getState().restore.list;

        store.dispatch(setScore(calculateScore(cards, guesses)));
    }

    return result;
};

export default generateCardsMiddleware;