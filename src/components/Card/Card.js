import React from 'react';
import styles from './Card.css';

/**
 * @enum {String}
 */
export const CardColor = {
    GREEN: 'green',
    RED: 'red',
    YELLOW: 'yellow',
    BLUE: 'blue',
    ORANGE: 'orange',
    MAGENTA: 'magenta'
};

const CARD_COLOR_CLASSES = {
    [CardColor.GREEN]: styles.cardGreen,
    [CardColor.RED]: styles.cardRed,
    [CardColor.YELLOW]: styles.cardYellow,
    [CardColor.BLUE]: styles.cardBlue,
    [CardColor.ORANGE]: styles.cardOrange,
    [CardColor.MAGENTA]: styles.cardMagenta
};

const Card = ({ color, clickable, onClick }) => {
    const className = [
        styles.card,
        CARD_COLOR_CLASSES[color],
        clickable ? styles.cardClickable : ''
    ].filter(Boolean).join(' ');

    return <div className={className} onClick={onClick}></div>;
};

Card.propTypes = {
    color: React.PropTypes.oneOf(Object.values(CardColor)).isRequired,
    clickable: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

Card.defaultProps = {
    clickable: false,
    onClick: null
};

export default Card;