import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Pad.css';

class Pad extends Component {
    state = {
        active: false,
    }

    toggle() {
        const active = !this.state.active;
        const state = { active };
        this.setState(state);
        this.props.onPadChange(this.props.id, active);
    }

    render() {
        // TODO add pad-active class if pad is active
        return (
            <div className={this.state.active ? 'Pad active' : 'Pad'} onClick={this.toggle.bind(this)}>
                <span>I am a pad</span>
            </div>
        );
    }

    static get propTypes() {
        return {
            id: PropTypes.number,
            onPadChange: PropTypes.func,
        };
    }
}

export default Pad;
