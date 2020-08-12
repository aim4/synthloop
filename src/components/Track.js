import React, { Component } from 'react';

class Track extends Component {
    state = {
        instrument: undefined,
        volumePercent: 1.0,
        soundFile: null,
    }

    play() {
        console.log(`Play sound of ${this.state.instrument}`);
    }

    changeVolume(percent) {
        // TODO: change volume in state to new volume percent
    }

    static render() {
        return (
            <div className="track">
                A single track
                {/* Create row of pads */}
            </div>
        );
    }
}

export default Track;
