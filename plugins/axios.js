import axios from "axios";

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    params:{
        apiKey:'66dfe4f5a567453bbc4fe1d7b029e67b',
        to: new Date().toISOString(),
        page:1,
        pageSize:3
    },
})