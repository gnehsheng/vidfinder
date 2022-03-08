import { useState } from "react";
import Search from "../Components/SearchForm";

import YoutubeEmbed from '../Components/YTplayer'
// import VimeoEmbed from '../Components/VimeoPlayer';
// import DmEmbed from '../Components/DailyMotionPlayer';

export default function Players() {

    const [videoArr, setVideoArr] = useState([])

    // const [youtubeId, setYoutubeId] = useState()
    // const [vimeoId, setVimeoId] = useState()
    // const [dmId, setDmId] = useState()

    function CallBack(arr) {
        setVideoArr(arr)
    }

    return (
        <div>
            <Search callBack={CallBack} />

            <div>{videoArr.map((arr) => {
                return (
                    arr.map((el) => {
                        return (
                            <div>
                                <YoutubeEmbed embedId={el.id} />
                            </div>
                        )
                    })
                )
            })}
            </div>

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* <div> */}

                {/* <YoutubeEmbed embedId={youtubeId} />
                <VimeoEmbed embedId={vimeoId} />
                <DmEmbed embedId={dmId} /> */}

                {/* Youtube */}
                {/* <div className='ytList'>{videoArr.map((el) => {
                    return (
                        <div onClick={() => { setYoutubeId(el.id.videoId) }}>
                            <img style={{ cursor: 'pointer' }}
                                src={el.snippet.thumbnails.default.url}
                                alt=''
                            />
                            <p>{el.snippet.title}</p>
                        </div>
                    )
                })}
                </div> */}

                {/* DailyMotion */}
                {/* <div className='dmList'>{videoArr.map((arr) => {
                    arr.map((el) => {
                        return (
                            <div p>
                                {el.id}
                            </div>
                        )

                    })
                    return (
                        <div p>

                        </div>
                    )
                })
                }
                </div> */}

                {/* Vimeo */}
                {/* <div className='vmList'>{vmArr.map((el) => {
                    return (
                        <div>
                            {<VimeoEmbed embedId={el.player_embed_url} />}
                        </div>
                    )
                })
                }
                </div> */}

            {/* </div> */}
            {/* //////////////////////////////////////////////////////////////////////////////////// */}

        </div>
    )
}