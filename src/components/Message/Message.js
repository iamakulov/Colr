import React from 'react';
import { connect } from 'react-redux';
import styles from './Message.css';

const Message = ({ children, okButtonText, onOkClicked }) => {
    return <div className={styles.message}>
        <div className={styles.text}>
            {children}
        </div>
        <button className={styles.okButton} onClick={onOkClicked}>{okButtonText}</button>
    </div>;
};

Message.propTypes = {
    children: React.PropTypes.node.isRequired,
    okButtonText: React.PropTypes.string,
    onOkClicked: React.PropTypes.func.isRequired
};

Message.defaultProps = {
    okButtonText: 'Got it'
};

export default Message;