import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { RESET_GAME } from '../reducers/common.js';
import { setColors } from '../reducers/remember.js';

const generateCardsHelper = (amount, colors) => {
    return new Array(amount).fill(null).map(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    });
};

function* generateCards(getState) {
    const { cardCount, currentColors } = getState().config;
    yield put(setColors(generateCardsHelper(cardCount, currentColors)));
}

function* watchResetGameToGenerateCards(getState) {
    yield* takeEvery(RESET_GAME, generateCards, getState);
}

export default watchResetGameToGenerateCards;