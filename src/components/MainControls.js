import React from 'react';
import PropTypes from 'prop-types';

function MainControls(props) {
    const buttonText = props.isPlaying ? 'Stop' : 'Play';

    return (
        <div className="Controls">
            <button id="play-button" onClick={props.togglePlay} key={props.isPlaying}>{buttonText}</button>
            {/* TODO: make this turn into stop instead of having two buttons */}
            <div className="slide-container">
                <label htmlFor="volume">Volume</label>
                <input type="range" min="0" max="100" value={props.volume} step="1" className="slider" name="volume" onChange={props.onVolumeChange}></input>
                <output name="volume-output" htmlFor="volume">{props.volume}</output>
            </div>
            <div className="slide-container">
                <label htmlFor="bpm">Beats Per Minute</label>
                <input type="range" min="0" max="160" value={props.bpm} step="10" className="slider" name="bpm" onChange={props.onBPMChange}></input>
                <output name="bpm-output" htmlFor="bpm">{props.bpm}</output>
            </div>
        </div>
    );
}

MainControls.propTypes = {
    bpm: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onBPMChange: PropTypes.func.isRequired,
    onVolumeChange: PropTypes.func.isRequired,
    togglePlay: PropTypes.func.isRequired,
};

export default MainControls;
