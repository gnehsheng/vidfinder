import axios from "axios";

const key = '3feaf0ee500f85a1719b'

export default axios.create({
    baseURL: 'https://api.dailymotion.com',
    params: {
        limit: 5
    },
    headers:{
        Authorization: `Bearer ${key}`
    }
})

