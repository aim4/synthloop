import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar.js';
import TrackControls from './TrackControls.js';
import * as CONST from '../constants.js';
import '../css/Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instrument: CONST.DEFAULT_INSTRUMENT,
            volume: CONST.DEFAULT_VOLUME,
        };
        this.setAudio(this.state.instrument);
    }

    setAudio(instrument) {
        const filepath = `${CONST.SOUND_PATH}/${instrument}.${CONST.SOUND_EXT}`;
        this.audio = new Audio(filepath);
    }

    // Audio properties: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    play = () => {
        this.audio.play();
    }

    onVolumeChange = (e) => {
        this.setState({ volume: parseInt(e.target.value, 10) });
    }

    onInstrumentChange = (e) => {
        this.setState({ instrument: e.target.value });
        this.setAudio(e.target.value);
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
