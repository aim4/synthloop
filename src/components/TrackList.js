import React, { Component } from 'react';
import Track from './Track.js';

class TrackList extends Component {
    state = {
        tracks: [],
    }

    static render() {
        return (
            <div className="track-list">
                {
                    this.state.tracks.map((track) => (
                        <Track track={track} key={track.id}></Track>
                    ))
                }
            </div>
        );
    }
}

export default TrackList;
