import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CONST from '../constants.js';

class MainControls extends Component {
    // TODO: add another prop to set controls to horizontal vs vertical layout
    constructor(props) {
        super(props);
        this.state = {
            volume: CONST.DEFAULT_VOLUME,
            bpm: CONST.DEFAULT_BPM,
        };
    }

    // TODO: remove onVolumeChange and onBPMChange and use props'
    onVolumeChange = (e) => {
        this.setState({ volume: e.target.value });
    }

    onBPMChange = (e) => {
        this.setState({ bpm: e.target.value });
    }

    render() {
        return (
            <div className="Controls">
                <button id="play-button" onClick={this.props.togglePlay}>Play</button>
                {/* TODO: make this turn into stop instead of having two buttons */}
                <button id="stop-button">Stop</button>
                <div className="slide-container">
                    <label htmlFor="volume">Volume</label>
                    <input type="range" min="0" max="100" value={this.props.volume} step="1" className="slider" name="volume" onChange={this.props.onVolumeChange}></input>
                    <output name="volume-output" htmlFor="volume">{this.props.volume}</output>
                </div>
                <div className="slide-container">
                    <label htmlFor="bpm">Beats Per Minute</label>
                    <input type="range" min="0" max="160" value={this.props.bpm} step="10" className="slider" name="bpm" onChange={this.props.onBPMChange}></input>
                    <output name="bpm-output" htmlFor="bpm">{this.props.bpm}</output>
                </div>
            </div>
        );
    }

    static get propTypes() {
        return {
            bpm: PropTypes.number,
            volume: PropTypes.number,
            onBPMChange: PropTypes.func,
            onVolumeChange: PropTypes.func,
            togglePlay: PropTypes.func,
        };
    }
}

export default MainControls;
