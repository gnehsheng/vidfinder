import React, {useState, useEffect} from 'react';
import './App.css';
import YoutubeEmbed from './Components/Player';
import Search from './Components/SearchForm';


function App() {

const [youtubeId, setYoutubeId] = useState('OT8if6DXOFQ')

function CallBack(id) {
  setYoutubeId(id)
}

  return (
    <div>
      <Search callBack={CallBack}/>
      <YoutubeEmbed embedId={youtubeId} />
    </div>

  );
}

export default App;
