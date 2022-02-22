import React, { useState } from "react";
import YouTube from "react-youtube";
import getYouTubeID from 'get-youtube-id';

export default function YouTubePlayer() {
    const [id, setId] = useState("");

    async function handleChange(e) {
        // console.log(await getYouTubeID(e.target.value))

        // let id = getYouTubeID(e.target.value)
        // console.log(id)
        setId(getYouTubeID(e.target.value) ? getYouTubeID(e.target.value) : "")

    }

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 0
        }
    };

    function onReady(event) {
        
        event.target.pauseVideo();
      }

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                required
                placeholder="Enter URL Here"
            />

            <YouTube videoId={id} opts={opts} onReady={e=>onReady(e)} />
        </div>
    );
}