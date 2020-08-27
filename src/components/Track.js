import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar.js';
import TrackControls from './TrackControls.js';
import * as CONST from '../constants.js';
import '../css/Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.soundFilePath = CONST.DEFAULT_SOUND_FILE_PATH;
        this.state = {
            instrument: CONST.DEFAULT_INSTRUMENT,
            volume: CONST.DEFAULT_VOLUME,
        };
        this.setAudio();
    }

    setAudio() {
        this.audio = new Audio(CONST.DEFAULT_SOUND_FILE_PATH);
    }

    // Audio properties: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    play = () => {
        console.log(`Play sound of ${this.state.instrument}`);
        this.audio.play();
    }

    onVolumeChange = (e) => {
        this.setState({ volume: parseInt(e.target.value, 10) });
    }

    onInstrumentChange = (e) => {
        console.log(e.target.value);
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
                <TrackControls
                    volume={this.state.volume}
                    onVolumeChange={this.onVolumeChange}
                    onInstrumentChange={this.onInstrumentChange}>
                </TrackControls>
                {bars}
                <button onClick={() => this.props.deleteTrack(this.props.track.id)}>
                    Delete track
                </button>
                <button onClick={this.play}>Play</button>
            </div>
        );
    }

    static get propTypes() {
        return {
            track: PropTypes.object,
            deleteTrack: PropTypes.func,
        };
    }
}

export default Track;
