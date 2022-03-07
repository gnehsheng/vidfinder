import React from 'react'
import { useState } from 'react'
import YouTubeApi from '../Api/YouTubeApi'
import DailyMotionApi from '../Api/DailyMotionApi'


export default function Search({callBack}) {


    const [search, setSearch] = useState()
    
    // async function handleClick() {
    //     const response = await YouTubeApi.get('/search',{
    //                 params:{
    //                     q: search
    //                 }
    //             })
    //             // callBack(response.data.items[0].id.videoId)
    //             callBack(response.data.items)
    // }

    async function handleClick() {
        const response = await DailyMotionApi.get(`?search=${search}`)                
                callBack(response.data.list)
                console.log(response)
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