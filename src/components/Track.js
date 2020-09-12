import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar.js';
import TrackControls from './TrackControls.js';
import * as CONST from '../constants.js';
import '../css/Track.css';

function calculateTempo(bpm) {
    return CONST.MILLISECONDS_IN_SEC / bpm;
}

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instrument: CONST.DEFAULT_INSTRUMENT,
            volume: CONST.DEFAULT_VOLUME,
            pos: 0,
        };
        this.timerId = null;
        this.setAudio();
    }

    setAudio() {
        const filepath = `${CONST.SOUND_PATH}/${this.state.instrument}.${CONST.SOUND_EXT}`;
        this.audio = new Audio(filepath);
    }

    setTimer() {
        if (this.props.isPlaying && !this.timerId) {
            this.timerId = setInterval(
                this.play,
                calculateTempo(this.props.bpm),
            );
        }
    }

    changeVolume(v) {
        this.audio.volume = (v / CONST.MAX_VOLUME) * (this.props.masterVolume / CONST.MAX_VOLUME);
    }

    // Audio properties: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    play = () => {
        this.audio.play();
    }

    onVolumeChange = (e) => {
        const volume = parseInt(e.target.value, 10);
        this.setState({ volume });
        this.changeVolume(volume);
    }

    onInstrumentChange = (e) => {
        this.setState({ instrument: e.target.value });
        this.setAudio(e.target.value);
    }

    onBPMChange = (e) => {
        const bpm = parseInt(e.target.value, 10);
        this.setState({ bpm });
        // change bpm of interval
    }

    mustResetTimer(prevState) {
        return (this.props.isPlaying !== prevState.isPlaying || this.props.bpm !== prevState.bpm);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.masterVolume !== prevState.masterVolume) {
            this.changeVolume(this.state.volume);
        }

        if (this.mustResetTimer(prevState)) {
            while (this.timerId) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
            this.setTimer();
        }
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
            isPlaying: PropTypes.bool,
            bpm: PropTypes.number,
            masterVolume: PropTypes.number,
            deleteTrack: PropTypes.func,
        };
    }
}

export default Track;
