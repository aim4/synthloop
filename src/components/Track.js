import React, { Component } from 'react';
import Pad from './Pad.js';
import * as CONST from '../constants.js';

class Track extends Component {
    constructor(props) {
        super(props);
        console.log(props.track);
        this.state = {
            instrument: undefined,
            volumePercent: 1.0,
            soundFile: null,
        };
    }

    play() {
        console.log(`Play sound of ${this.state.instrument}`);
    }

    changeVolume(percent) {
        // TODO: change volume in state to new volume percent
    }

    render() {
        const pads = [];
        for (let i = 0; i < CONST.NUM_PADS_PER_TRACK; i++) {
            pads.push((
                <Pad key={i}></Pad>
            ));
        }

        return (
            <div className="track">
                A single track
                {pads}
            </div>
        );
    }
}

export default Track;
