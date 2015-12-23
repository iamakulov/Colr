import React from 'react';
import styles from './BlockGallery.css';

const BlockGallery = ({ children, currentBlock }) => {
    return <div>
        { React.Children.map(children, (child, i) => {
            let className;
            if (i < currentBlock) {
                className = styles.blockBeforeCurrent;
            } else if (i === currentBlock ) {
                className = styles.blockCurrent;
            } else if (i === currentBlock + 1) {
                className = styles.blockRightAfterCurrent;
            } else {
                className = styles.blockAfterCurrent;
            }

            return <div className={className} key={i}>
                {child}
            </div>;
        })}
    </div>;
};

export default BlockGallery;

BlockGallery.propTypes = {
    children: React.PropTypes.node.isRequired,
    currentBlock: React.PropTypes.number
};

BlockGallery.defaultProps = {
    currentBlock: 0
};