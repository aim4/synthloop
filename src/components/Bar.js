import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad.js';
import * as CONST from '../constants.js';
import '../css/Bar.css';

class Bar extends Component {
    render() {
        const pads = [];
        const base = this.props.id * CONST.NUM_PADS_PER_BAR;
        for (let i = 0; i < CONST.NUM_PADS_PER_BAR; i++) {
            pads.push((
                <Pad key={i} id={base + i} pos={this.props.pos} className="" onPadChange={this.props.onPadChange}></Pad>
            ));
        }

        // TODO add pad-active class if pad is active
        return (
            <div className={'Bar'}>
                I am a bar
                {pads}
            </div>
        );
    }

    static get propTypes() {
        return {
            id: PropTypes.number,
            pos: PropTypes.number,
            onPadChange: PropTypes.func,
        };
    }
}

export default Bar;
