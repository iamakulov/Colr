import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import zip from 'array-zip';
import { ADD_GUESS } from '../reducers/restore.js';
import { setScore } from '../reducers/score.js';

const calculateScoreHelper = (cards, guesses) => {
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

function* calculateScore(getState) {
    const cards = getState().remember.list;
    const guesses = getState().restore.list;

    yield put(setScore(calculateScoreHelper(cards, guesses)));
}

function *watchAddGuessToCalculateScore(getState) {
    yield* takeEvery(ADD_GUESS, calculateScore, getState);
}

export default watchAddGuessToCalculateScore;