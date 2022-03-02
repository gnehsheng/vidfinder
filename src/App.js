import React, {useState} from 'react';
import './App.css';
import YoutubeEmbed from './Components/YTplayer';
import Search from './Components/SearchForm';
import VimeoEmbed from './Components/VimeoPlayer';


function App() {

const [youtubeId, setYoutubeId] = useState('OT8if6DXOFQ')
const [vimeoId, setVimeoId] = useState(588242833)

function CallBack(id) {
  setYoutubeId(id)
}

  return (
    <div>
      <Search callBack={CallBack}/>
      <YoutubeEmbed embedId={youtubeId} />
      <VimeoEmbed embedId={vimeoId}/>
    </div>

  );
}

export default App;
