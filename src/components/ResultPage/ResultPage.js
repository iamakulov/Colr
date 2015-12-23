import React from 'react';
import { connect } from 'react-redux';
import { startGame } from "../../reducers/common.js";
import styles from './ResultPage.css';

class ResultPage extends React.Component {
    // Add the shouldComponentUpdate() method to prevent the page from re-rendering with zero score when the store is resetted
    shouldComponentUpdate(nextProps) {
        return nextProps.isActive;
    }

    render() {
        const { score, cardCount, restartGame } = this.props;

        const maximalScore = cardCount * (cardCount + 1) / 2;

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
    score: React.PropTypes.number.isRequired,
    cardCount: React.PropTypes.number.isRequired,
    restartGame: React.PropTypes.func.isRequired
};

export default connect(
    state => ({
        score: state.score.current,
        cardCount: state.config.cardCount
    }),
    dispatch => ({
        restartGame: () => dispatch(startGame())
    })
)(ResultPage);