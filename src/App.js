import React from 'react';
import './css/App.css';
import TrackList from './components/TrackList.js';

function App() {
    return (
        <div className="App">
            <TrackList>
                TrackList is here
            </TrackList>
            <button className="pure-button">This is a test button</button>
        </div>
    );
}

export default App;
