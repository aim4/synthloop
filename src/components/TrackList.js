import React, { Component } from 'react';
import MainControls from './MainControls.js';
import Track from './Track.js';
import * as CONST from '../constants.js';
import '../css/TrackList.css';

function calculateTempo(bpm) {
    console.log(CONST.MILLISECONDS_IN_SEC / bpm);
    return CONST.MILLISECONDS_IN_SEC / bpm;
}

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [{
                id: 0,
            }],
            bpm: CONST.DEFAULT_BPM,
            volume: CONST.DEFAULT_VOLUME,
            isPlaying: false,
            pos: -1,
        };

        this.timerId = null;
    }

    addTrack = () => {
        const newId = Math.random() * Number.MAX_SAFE_INTEGER;
        this.setState({
            tracks: [...this.state.tracks, { id: newId }],
        });
    }

    deleteTrack = (id) => {
        const tracks = this.state.tracks.filter((t) => t.id !== id);
        this.setState({
            tracks,
        });
    }

    onBPMChange = (e) => {
        this.setState({ bpm: parseInt(e.target.value, 10) });
        // set timer
    }

    onVolumeChange = (e) => {
        this.setState({ volume: parseInt(e.target.value, 10) });
    }

    togglePlay = () => {
        this.stopTimer();

        const isPlaying = !this.state.isPlaying;
        if (isPlaying) {
            this.setTimer();
        }
        this.setState({ isPlaying });
    }

    stopTimer() {
        while (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    setTimer() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const totalPads = CONST.NUM_BARS_PER_TRACK * CONST.NUM_PADS_PER_BAR;
                const pos = (this.state.pos + 1) % totalPads;
                console.log(pos);
                this.setState({ pos });
            },
            calculateTempo(this.state.bpm));
        }
    }

    render() {
        console.log(this.state.tracks);
        return (
            <div className={'TrackList'}>
                {
                    this.state.tracks.map((track) => (
                        <Track
                            track={track}
                            key={track.id}
                            isPlaying={this.state.isPlaying}
                            pos={this.state.pos}
                            bpm={this.state.bpm}
                            masterVolume={this.state.volume}
                            deleteTrack={this.deleteTrack}>
                        </Track>
                    ))
                }
                <button onClick={this.addTrack}>
                    Add Track
                </button>
                <MainControls
                    bpm={this.state.bpm}
                    volume={this.state.volume}
                    isPlaying={this.state.isPlaying}
                    onBPMChange={this.onBPMChange}
                    onVolumeChange={this.onVolumeChange}
                    togglePlay={this.togglePlay}>
                </MainControls>
            </div>
        );
    }
}

export default TrackList;
