import React from 'react';
import zip from 'array-zip';
import { connect } from 'react-redux';
import { switchToNextPage } from '../../reducers/page.js';
import { startGame } from "../../reducers/common.js";
import styles from './ResultPage.css';

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

class ResultPage extends React.Component {
    // Add the shouldComponentUpdate() method to prevent the page from re-rendering with zero score when the store is resetted
    shouldComponentUpdate(nextProps) {
        return nextProps.isActive;
    }

    render() {
        const { cards, guesses, restartGame } = this.props;

        const score = calculateScore(cards, guesses);
        const maximalScore = cards.length * (cards.length + 1) / 2;

        let praise;
        if (score < maximalScore / 2) {
            praise = 'Good!';
        } else if (score < maximalScore) {
            praise = 'Great!';
        } else {
            praise = 'Perfect!';
        }

        return <div className={styles.page}>
            <div className={styles.praise}>{praise}</div>
            <div className={styles.points}>
                <div>You collected</div>
                <div className={styles.score}>{score}</div>
                <div>{score === 1 ? 'point' : 'points'}</div>
            </div>
            <div className={styles.menu}>
                <button className={styles.button} onClick={restartGame}>Play again</button>
            </div>
        </div>;
    }
}

ResultPage.propTypes = {
    isActive: React.PropTypes.bool.isRequired,
    cards: React.PropTypes.arrayOf(React.PropTypes.string),
    guesses: React.PropTypes.arrayOf(React.PropTypes.string),
    restartGame: React.PropTypes.func.isRequired
};

export default connect(
    state => ({
        cards: state.remember.list,
        guesses: state.restore.list
    }),
    dispatch => ({
        restartGame: () => dispatch(startGame())
    })
)(ResultPage);