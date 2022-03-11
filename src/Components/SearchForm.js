import React from 'react'
import { useState } from 'react'
import YouTubeApi from '../Api/YouTubeApi'
import DailyMotionApi from '../Api/DailyMotionApi'
import VimeoApi from '../Api/VimeoApi'
import '../App.css'


export default function Search({ callBack }) {


    const [search, setSearch] = useState()

    const handleClick = async () => {
        try {
            const response = await Promise.allSettled([
                GetYouTube(),
                GetVimeo(),
                GetDailymotion()
            ])
            const data = response.map((response) => response.value)
            callBack(data)
        } catch {
            throw Error('Promise Failed')
        }
    }

    async function GetYouTube() {
        const response = await YouTubeApi.get('/search', {
            params: { q: search }
        })
        const arr = response.data.items.map(el => {
            return (
                {
                    id: el.id.videoId,
                    // title: el.snippet.title,
                    // description: el.snippet.description,
                    tag: 'Youtube'
                }
            )
        })
        return arr
    }

    async function GetVimeo() {
        const response = await VimeoApi.get(`?query=${search}`)
        const arr = response.data.data.map(el => {
            return (
                {
                    id: el.player_embed_url,
                    // title:el.name,
                    // description: el.description,
                    tag: 'Vimeo'
                }
            )
        })
        return arr
    }
    
    async function GetDailymotion() {
        const response = await DailyMotionApi.get(`?search=${search}`)   
        const arr = response.data.list.map(el => {
        
            return (
                {
                    id: el.id,
                    // title: el.title,
                    // description: ''
                    tag: 'DailyMotion'
                }
            )
        })
        return arr
    }

    return (
        <div className='search'>
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