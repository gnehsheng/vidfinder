import React from 'react'
import { useState } from 'react'
import YouTubeApi from '../Api/YouTubeApi'


export default function Search({callBack}) {

    const [search, setSearch] = useState()
    
    async function handleClick() {
        const response = await YouTubeApi.get('/search',{
                    params:{
                        q: search
                    }
                })
                // callBack(response.data.items[0].id.videoId)
                callBack(response.data.items)
    }

    return (
        <div class='search'>
            <input
                type="text"
                placeholder="Input here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}