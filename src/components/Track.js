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
            pads: Array(CONST.NUM_BARS_PER_TRACK * CONST.NUM_PADS_PER_BAR).fill(false),
        };

        this.timerId = null;
        this.setAudio(this.state.instrument);
    }

    setAudio(instrument) {
        const filepath = `${CONST.SOUND_PATH}/${instrument}.${CONST.SOUND_EXT}`;
        this.audio = new Audio(filepath);
        this.audio.playbackRate = 2 * (this.props.bpm / CONST.DEFAULT_BPM);
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
        if (this.state.pads[this.props.pos]) {
            this.audio.play();
        }
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

    onPadChange = (id, isActive) => {
        const pads = [...this.state.pads];
        pads[id] = isActive;
        this.setState({ pads });
    }

    shouldPlaySound(prevProps) {
        console.log('Track', this.props.pos, prevProps.pos);
        return (this.props.pos !== prevProps.pos);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.masterVolume !== prevState.masterVolume) {
            this.changeVolume(this.state.volume);
        }

        if (this.shouldPlaySound(prevProps)) {
            this.play();
        }
    }

    render() {
        const bars = [];
        for (let i = 0; i < CONST.NUM_BARS_PER_TRACK; i++) {
            bars.push((
                <Bar key={i} id={i} pos={this.props.pos} onPadChange={this.onPadChange}></Bar>
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
            isPlaying: PropTypes.bool,
            pos: PropTypes.number,
            bpm: PropTypes.number,
            masterVolume: PropTypes.number,
            deleteTrack: PropTypes.func,
            track: PropTypes.object,
        };
    }
}

export default Track;
