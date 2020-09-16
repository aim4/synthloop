import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CONST from '../constants.js';
import '../css/TrackControls.css';

class TrackControls extends Component {
    // TODO: change to functional component
    constructor(props) {
        // TODO: add pitch
        super(props);
        this.init();
    }

    init() {
        this.instruments = CONST.INSTRUMENT_OPTIONS;
    }

    render() {
        return (
            <div className="TrackControls">
                <div className="slide-container">
                    <label htmlFor="volume">Volume</label>
                    <input type="range" min="0" max="100" orient="vertical" value={this.props.volume} step="1" className="slider" name="volume" onChange={this.props.onVolumeChange}></input>
                    <output name="volume-output" htmlFor="volume">{this.props.volume}</output>
                </div>
                <label htmlFor="instrument-selection"></label>
                <select id="instrucment-selection" onChange={this.props.onInstrumentChange}>
                    {
                        this.instruments.map((instrument) => (
                            <option key={instrument}>{instrument}</option>
                        ))
                    }
                </select>
            </div>
        );
    }

    static get propTypes() {
        return {
            volume: PropTypes.number,
            onVolumeChange: PropTypes.func,
            onInstrumentChange: PropTypes.func,
        };
    }
}

export default TrackControls;
