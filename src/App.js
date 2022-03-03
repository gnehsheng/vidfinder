import React, { useState } from 'react';
import './App.css';
import YoutubeEmbed from './Components/YTplayer';
import Search from './Components/SearchForm';
import VimeoEmbed from './Components/VimeoPlayer';


function App() {

  const [youtubeId, setYoutubeId] = useState()
  const [vimeoId, setVimeoId] = useState()
  const [ytArr, setYtArr] = useState([])

  function CallBack(arr) {
    // setYoutubeId(id)
    setYtArr(arr)
  }

  return (
    <div>
      <Search callBack={CallBack} />
      <YoutubeEmbed embedId={youtubeId} />

      <div className='ytList'>{ytArr.map((el) => {
        console.log(el)
        return (
          <div onClick={() => { setYoutubeId(el.id.videoId) }}>
            <img style={{ cursor: 'pointer' }}
              src={el.snippet.thumbnails.default.url}
              alt=''
            />
            <p>{el.snippet.title}</p>
          </div>
        )
      }
      )}
      </div>

      <VimeoEmbed embedId={vimeoId} />
    </div>

  );
}

export default App;
