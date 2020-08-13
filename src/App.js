import React from 'react';
import './css/App.css';
import './css/styles.css';
import Controls from './components/Controls.js';
import TrackList from './components/TrackList.js';

function App() {
    return (
        <div className="App">
            <TrackList>
                TrackList is here
            </TrackList>
            <Controls>
                Controls are here
            </Controls>
            <button className="pure-button">This is a test button</button>
        </div>
    );
}

export default App;
