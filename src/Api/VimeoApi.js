import axios from "axios";

const Token = 'c90bfc1f80f430493526e013f99a560e'

export default axios.create({
    baseURL: 'https://api.vimeo.com',
    params: {
        
    },
    headers:{
        Authorization: `Bearer ${Token}`
    }
})

