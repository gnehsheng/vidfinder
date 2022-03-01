import axios from "axios";

const KEY = 'AIzaSyBdNL1lqIr0qor2YvaLnQFavTH7YGlaGp0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers:{}
})