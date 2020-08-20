import React from 'react';
import './css/App.css';
import MainControls from './components/MainControls.js';
import TrackList from './components/TrackList.js';

function App() {
    return (
        <div className="App">
            <TrackList>
                TrackList is here
            </TrackList>
            <MainControls>
                Controls are here
            </MainControls>
            <button className="pure-button">This is a test button</button>
        </div>
    );
}

export default App;
