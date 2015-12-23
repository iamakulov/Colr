import React from 'react';
import { connect } from 'react-redux';
import styles from './Score.css';


const DumbScore = ({ children, isVisible }) =>
    <div className={isVisible ? styles.scoreVisible : styles.scoreInvisible}>
        {children}
    </div>;

DumbScore.propTypes = {
    children: React.PropTypes.node.isRequired,
    isVisible: React.PropTypes.bool
};

DumbScore.defaultProps = {
    isVisible: true
};


const Score = ({ currentPage, restorePageActiveBlock, score }) => {
    const RESTORE_CARDS_PAGE_INDEX = 2;

    const isScoreVisible = currentPage === RESTORE_CARDS_PAGE_INDEX && restorePageActiveBlock > 0;

    return <DumbScore isVisible={isScoreVisible}>{score}</DumbScore>
};

Score.propTypes = {
    currentPage: React.PropTypes.number.isRequired,
    restorePageActiveBlock: React.PropTypes.number.isRequired,
    score: React.PropTypes.number.isRequired
};


export default connect(
    state => ({
        currentPage: state.page.current,
        restorePageActiveBlock: state.restore.currentBlock,
        score: state.score.current
    })
)(Score);