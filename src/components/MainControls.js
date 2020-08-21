import React, { Component } from 'react';

class MainControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 100,
            bpm: 120,
        };
    }

    onVolumeChange = (e) => {
        this.setState({ volume: e.target.value });
    }

    onBPMChange = (e) => {
        this.setState({ bpm: e.target.value });
    }

    render() {
        return (
            <div className="MainControls">
                Controls here
                <div className="slide-container">
                    <input type="range" min="0" max="100" value={this.state.volume} step="1" className="slider" name="volume" onChange={this.onVolumeChange}></input>
                    <label htmlFor="volume">Volume</label>
                </div>
                <div className="slide-container">
                    <input type="range" min="0" max="160" value={this.state.bpm} step="10" className="slider" name="bpm" onChange={this.onBPMChange}></input>
                    <label htmlFor="bpm">Beats Per Minute</label>
                </div>
            </div>
        );
    }
}

export default MainControls;
