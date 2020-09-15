import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Pad.css';

class Pad extends Component {
    state = {
        active: false,
        isPlaying: false,
    }

    toggleActive() {
        const active = !this.state.active;
        this.setState({ active });
        this.props.onPadChange(this.props.id, active);
    }

    play() {
        // TODO: get rid of play in Track
        this.setState({ isPlaying: true });
    }

    stop() {
        this.setState({ isPlaying: false });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pos && this.props.pos !== prevProps.pos) {
            console.log(this.props.pos, prevProps.pos);
            if (this.props.pos === this.props.id) {
                this.play();
            } else {
                this.stop();
            }
        }
    }

    render() {
        const classes = ['Pad'];
        if (this.state.active) {
            classes.push('active');
        }
        if (this.state.isPlaying) {
            classes.push('play');
        }
        if (this.state.active && this.state.isPlaying) {
            classes.push('play-active');
        }

        return (
            <div className={classes.join(' ')} onClick={this.toggleActive.bind(this)}>
                <span>I am a pad</span>
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

export default Pad;
