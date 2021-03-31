import axios from 'axios';

const KEY='AIzaSyA9DzLmQHqu64JKQrXSuSIQcqGa3Hzs2B4'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
    }
});