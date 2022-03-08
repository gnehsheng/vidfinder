import axios from "axios";

const Token = 'c90bfc1f80f430493526e013f99a560e'

export default axios.create({
    baseURL: 'https://api.vimeo.com/videos',
    params: {
        per_page:'10',
        page: '1',
        sort: 'plays'
    },
    headers:{
        Authorization: `Bearer ${Token}`
    }
})

