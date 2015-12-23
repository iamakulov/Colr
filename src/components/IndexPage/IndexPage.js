import React from 'react';
import { connect } from 'react-redux';
import { switchToNextPage } from '../../reducers/page.js';
import styles from './IndexPage.css';

const IndexPage = ({ switchToNextPage }) => {
    return <div className={styles.page}>
        <div className={styles.pageInner}>
            <header className={styles.header}>
                <h1 className={styles.headerName}>Colr</h1>
                <div className={styles.headerDescription}>A color remembering game</div>
            </header>
            <div className={styles.menu}>
                <button className={styles.button} onClick={switchToNextPage}>Start game</button>
            </div>
        </div>
    </div>;
};

IndexPage.propTypes = {
    switchToNextPage: React.PropTypes.func.isRequired
};

export default connect(
    state => ({}),
    dispatch => ({
        switchToNextPage: () => dispatch(switchToNextPage())
    })
)(IndexPage);