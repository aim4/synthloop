import React from 'react';
import './App.css';
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
    </div>
  );
}

export default App;
