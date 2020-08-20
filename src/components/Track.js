import React, { Component } from 'react';
import Bar from './Bar.js';
import TrackControls from './TrackControls.js';
import * as CONST from '../constants.js';
import '../css/Track.css';

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
        const bars = [];
        for (let i = 0; i < CONST.NUM_BARS_PER_TRACK; i++) {
            bars.push((
                <Bar key={i}></Bar>
            ));
        }

        return (
            <div className={'Track'}>
                A single track
                <TrackControls></TrackControls>
                {bars}
            </div>
        );
    }
}

export default Track;
