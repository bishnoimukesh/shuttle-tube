import axios from 'axios';

const getVideosDataFromServer = async () => {
    try {
        const res = await axios.get('/api/videos');
        return res.data.videos;
    } catch(error) {
        console.log(error);
    }
}

export { getVideosDataFromServer };