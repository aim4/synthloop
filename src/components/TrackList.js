import React, { Component } from 'react';
import Track from './Track.js';
import '../css/TrackList.css';

class TrackList extends Component {
    state = {
        tracks: [{
            id: 0,
        }],
    }

    render() {
        return (
            <div className={'TrackList'}>
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
