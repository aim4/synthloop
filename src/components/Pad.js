import React, { Component } from 'react';
import '../css/Pad.css';

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
            <div className="Pad">
                <span>I am a pad</span>
                {/* I am a pad */}
            </div>
        );
    }
}

export default Pad;
