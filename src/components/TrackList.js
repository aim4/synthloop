import React, { Component } from 'react';
import MainControls from './MainControls.js';
import Track from './Track.js';
import '../css/TrackList.css';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [{
                id: 0,
            }],
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
                <MainControls></MainControls>
            </div>
        );
    }
}

export default TrackList;
