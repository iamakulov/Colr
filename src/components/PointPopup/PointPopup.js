import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './PointPopup.css';

class PointPopup extends React.Component {
    constructor() {
        super();

        this.state = {
            isVisible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.points !== 0) {
            this.setState({
                isVisible: true
            });
        }
    }

    componentDidUpdate() {
        if (this.state.isVisible) {
            // Force the browser to redraw the control to make it visible
            ReactDOM.findDOMNode(this).offsetHeight;

            this.setState({
                isVisible: false
            });
        }
    }

    render() {
        const { points } = this.props;

        return <div className={this.state.isVisible ? styles.popupVisible : styles.popupInvisible}>
            +{points}
        </div>;
    }
}

PointPopup.propTypes = {
    points: React.PropTypes.number.isRequired
};


export default connect(
    state => ({
        points: state.score.latestAdded
    })
)(PointPopup);