import React from 'react';
import { connect } from 'react-redux';
import styles from './ColrApp.css';

import Counter from '../Counter/Counter.js';
import IndexPage from '../IndexPage/IndexPage.js';
import RememberCardsPage from '../RememberCardsPage/RememberCardsPage.js';
import RestoreCardsPage from '../RestoreCardsPage/RestoreCardsPage.js';
import ResultPage from '../ResultPage/ResultPage.js';

const allPages = [IndexPage, RememberCardsPage, RestoreCardsPage, ResultPage];

const ColrApp = ({ currentPageIndex }) => {
    return <div className={styles.container}>
        <Counter />

        <div className={styles.pages}>
            { allPages.map((Page, i) => {
                const offset = (i - currentPageIndex) * 100;
                const style = {
                    transform: `translateX(${offset}%)`
                };

                return <div className={styles.page} style={style} key={i}>
                    <Page isActive={i === currentPageIndex}/>
                </div>;
            }) }
        </div>
    </div>;
};

ColrApp.propTypes = {
    currentPageIndex: React.PropTypes.number.isRequired
};

export default connect(
    state => ({
        currentPageIndex: state.page.current
    })
)(ColrApp);