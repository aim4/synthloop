import React, { Component } from 'react';
import MainControls from './MainControls.js';
import Track from './Track.js';
import * as CONST from '../constants.js';
import '../css/TrackList.css';

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
        };
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
        this.setState({ bpm: e.target.value });
    }

    onVolumeChange = (e) => {
        this.setState({ volume: e.target.value });
    }

    togglePlay = () => {
        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
        return (
            <div className={'TrackList'}>
                {
                    this.state.tracks.map((track) => (
                        <Track track={track} key={track.id} deleteTrack={this.deleteTrack}></Track>
                    ))
                }
                <button onClick={this.addTrack}>
                    Add Track
                </button>
                <MainControls
                    bpm={this.state.bpm}
                    volume={this.state.volume}
                    onBPMChange={this.onBPMChange}
                    onVolumeChange={this.onVolumeChange}
                    togglePlay={this.togglePlay}>
                </MainControls>
            </div>
        );
    }
}

export default TrackList;
