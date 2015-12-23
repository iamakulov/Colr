import React from 'react';
import { connect } from 'react-redux';
import { switchToNextPage } from '../../reducers/page.js';
import { switchToBlock } from '../../reducers/remember.js';
import BlockGallery from '../BlockGallery/BlockGallery.js';
import Message from '../Message/Message.js';
import Card from '../Card/Card.js';
import styles from './RememberCardsPage.css';

const intervalBetweenBlocks = 2000;

class RememberCardsPage extends React.Component {
    constructor() {
        super();

        this._startAnimation = this._startAnimation.bind(this);
        this._switchToNextBlock = this._switchToNextBlock.bind(this);
        this._endAnimation = this._endAnimation.bind(this);
    }

    _startAnimation() {
        this._cardInterval = setInterval(() => {
            const blockCount = this.props.cardList.length + 1;
            if (this.props.currentBlock < blockCount - 1) {
                this._switchToNextBlock();
            } else {
                this._endAnimation();
            }
        }, intervalBetweenBlocks);

        this._switchToNextBlock();
    }

    _switchToNextBlock() {
        this.props.switchToBlock(this.props.currentBlock + 1);
    }

    _endAnimation() {
        clearInterval(this._cardInterval);
        this.props.switchToNextPage();
    }

    componentWillUnmount() {
        clearInterval(this._cardInterval);
    }

    render() {
        const { cardList, currentBlock } = this.props;

        return <div className={styles.page}>
            <BlockGallery currentBlock={currentBlock}>
                <Message onOkClicked={this._startAnimation}>
                    <div>First step.</div>
                    <div>Remember the color order.</div>
                </Message>

                {cardList.map((card, id) =>
                    <Card key={id} color={card} />
                )}
            </BlockGallery>
        </div>;
    }
}

RememberCardsPage.propTypes = {
    cardList: React.PropTypes.array.isRequired,
    currentBlock: React.PropTypes.number.isRequired,
    switchToNextPage: React.PropTypes.func.isRequired,
    switchToBlock: React.PropTypes.func.isRequired
};

export default connect(
    state => ({
        cardList: state.remember.list,
        currentBlock: state.remember.currentBlock
    }),
    dispatch => ({
        switchToNextPage: () => dispatch(switchToNextPage()),
        switchToBlock: (index) => dispatch(switchToBlock(index))
    })
)(RememberCardsPage);