import React from 'react';
import { connect } from 'react-redux';
import styles from './Counter.css';


const DumbCounter = ({ children, isVisible }) =>
    <div className={isVisible ? styles.counterVisible : styles.counterInvisible}>
        {children}
    </div>;

DumbCounter.propTypes = {
    children: React.PropTypes.node.isRequired,
    isVisible: React.PropTypes.bool
};

DumbCounter.defaultProps = {
    isVisible: true
};


const Counter = ({ currentPage, rememberPageActiveBlock, restorePageActiveBlock }) => {
    const REMEMBER_CARDS_PAGE_INDEX = 1;
    const RESTORE_CARDS_PAGE_INDEX = 2;
    const RESULT_PAGE_INDEX = 3;

    const isCounterVisible =
        (currentPage === REMEMBER_CARDS_PAGE_INDEX && rememberPageActiveBlock > 0) ||
        (currentPage === RESTORE_CARDS_PAGE_INDEX && restorePageActiveBlock > 0);

    let counterIndex;
    // Additional conditions like (currentPage === RESTORE_CARDS_PAGE_INDEX && restorePageActiveBlock === 0) are used to prevent the counter value from changing to 0 when fading out
    if (currentPage === REMEMBER_CARDS_PAGE_INDEX || (currentPage === RESTORE_CARDS_PAGE_INDEX && restorePageActiveBlock === 0)) {
        counterIndex = rememberPageActiveBlock;
    } else if (currentPage === RESTORE_CARDS_PAGE_INDEX && restorePageActiveBlock > 0 || currentPage === RESULT_PAGE_INDEX) {
        counterIndex = restorePageActiveBlock;
    } else {
        counterIndex = 0;
    }

    return <DumbCounter isVisible={isCounterVisible}>#{counterIndex}</DumbCounter>
};

Counter.propTypes = {
    currentPage: React.PropTypes.number.isRequired,
    rememberPageActiveBlock: React.PropTypes.number.isRequired,
    restorePageActiveBlock: React.PropTypes.number.isRequired
};


export default connect(
    state => ({
        currentPage: state.page.current,
        rememberPageActiveBlock: state.remember.currentBlock,
        restorePageActiveBlock: state.restore.currentBlock
    })
)(Counter);