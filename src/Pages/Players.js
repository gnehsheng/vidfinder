import { useState } from "react";
import Search from "../Components/SearchForm";
import '../App.css'

import YoutubeEmbed from '../Components/YTplayer'
import VimeoEmbed from '../Components/VimeoPlayer';
import DmEmbed from '../Components/DailyMotionPlayer';

export default function Players() {

    const [videoArr, setVideoArr] = useState([])

    function CallBack(arr) {
        setVideoArr(arr)

    }

    return (
        <div>
            <Search callBack={CallBack} />
            <div className="players">
                {videoArr.map((arr, index) => {
                    if (index === 0) {
                        return (
                            arr.map((el) => {
                                return (
                                    <div className="YouTubePlayer">
                                        <YoutubeEmbed embedId={el.id} />
                                    </div>
                                )
                            }
                            )
                        )
                    }

                    if (index === 1) {
                        return (
                            arr.map((el) => {
                                return (
                                    <div className="VimeoPlayer">
                                        <VimeoEmbed embedId={el.id} />
                                    </div>
                                )
                            }
                            )
                        )
                    }

                    if (index === 2) {
                        return (
                            arr.map((el) => {
                                return (
                                    <div className="DailyMotionPlayer">
                                        <DmEmbed embedId={el.id} />
                                    </div>
                                )
                            }
                            )
                        )
                    }

                })}

            </div>

            <footer>
                Created by Ng Yong Sheng (Source at <a href={'https://github.com/gnehsheng?tab=repositories'}>github</a>)
            </footer>
            
        </div>
    )

}