import React from 'react';
import { connect } from 'react-redux';
import { switchToNextPage } from '../../reducers/page.js';
import { addGuess, switchToBlock } from '../../reducers/restore.js';
import BlockGallery from '../BlockGallery/BlockGallery.js';
import Message from '../Message/Message.js';
import Card from '../Card/Card.js';
import styles from './RestoreCardsPage.css';

class RestoreCardsPage extends React.Component {
    constructor() {
        super();

        this._switchToNextBlockOrPage = this._switchToNextBlockOrPage.bind(this);
        this._switchToNextBlock = this._switchToNextBlock.bind(this);
    }

    _switchToNextBlockOrPage() {
        const blockCount = this.props.cardCount + 1;
        if (this.props.currentBlock < blockCount - 1) {
            this._switchToNextBlock();
        } else {
            this.props.switchToNextPage();
        }
    }

    _switchToNextBlock() {
        this.props.switchToBlock(this.props.currentBlock + 1);
    }

    render() {
        const { currentBlock, availableColors, cardCount, addGuess } = this.props;

        return <div className={styles.page}>
            <BlockGallery currentBlock={currentBlock}>
                <Message onOkClicked={this._switchToNextBlockOrPage}>
                    <p className={styles.paragraph}>Second step.</p>
                    <p className={styles.paragraph}>Restore the color order.</p>
                </Message>

                {new Array(cardCount).fill(null).map((_, id) =>
                    <div className={styles.cardBundle} key={id}>
                        {availableColors.map((color, id) =>    // TODO
                            <div key={id} className={styles.cardBundleItem}>
                                <Card color={color} clickable onClick={() => {
                                    addGuess(color);
                                    this._switchToNextBlockOrPage();
                                }} />
                            </div>
                        )}
                    </div>
                )}
            </BlockGallery>
        </div>;
    }
}

RestoreCardsPage.propTypes = {
    currentBlock: React.PropTypes.number.isRequired,
    availableColors: React.PropTypes.array.isRequired,
    cardCount: React.PropTypes.number.isRequired,
    switchToNextPage: React.PropTypes.func.isRequired,
    addGuess: React.PropTypes.func.isRequired,
    switchToBlock: React.PropTypes.func.isRequired
};

export default connect(
    state => ({
        currentBlock: state.restore.currentBlock,
        availableColors: state.config.currentColors,
        cardCount: state.config.cardCount
    }),
    dispatch => ({
        switchToNextPage: () => dispatch(switchToNextPage()),
        addGuess: (color) => dispatch(addGuess(color)),
        switchToBlock: (number) => dispatch(switchToBlock(number))
    })
)(RestoreCardsPage);