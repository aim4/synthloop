import React, { Component } from 'react';

class Pad extends Component {
    state = {
        active: false,
    }

    toggle() {
        const state = {
            active: !this.state.active,
        };
        this.setState(state);
    }

    render() {
        // TODO add pad-active class if pad is active
        return (
            <div className="pad">
                I am a pad
            </div>
        );
    }
}

export default Pad;
