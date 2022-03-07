import React, { useState } from 'react';
import './App.css';
import Search from './Components/SearchForm';
import YoutubeEmbed from './Components/YTplayer';
import VimeoEmbed from './Components/VimeoPlayer';
import DmEmbed from './Components/DailyMotionPlayer';


function App() {

  const [youtubeId, setYoutubeId] = useState()
  const [vimeoId, setVimeoId] = useState()
  const [dmId, setDmId] = useState()
  const [ytArr, setYtArr] = useState([])
  
  const [dmArr, setDmArr] = useState([])

  // function CallBack(arr) {
  //   // setYoutubeId(id)
  //   setYtArr(arr)
    
  // }

  function DmCallBack(arr) {
    setDmArr(arr)
  }

  return (
    <div>
      <Search callBack={DmCallBack} />
      <YoutubeEmbed embedId={youtubeId} />

        {/* <div className='ytList'>{ytArr.map((el) => {

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
        </div> */}
      
      <div className='dmList'>{dmArr.map((el) => {
        return(
          <div p>
            <DmEmbed embedId={el.id} />
          </div>
        )
      })
    }
        </div>


      <VimeoEmbed embedId={vimeoId} />
      
    </div>

  );
}

export default App;
