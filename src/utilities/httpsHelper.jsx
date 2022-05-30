import axios from 'axios';

const getVideosDataFromServer = async () => {
    try {
        const {data} = await axios.get('/api/videos');
        return data.videos;
    } catch(error) {
        console.log(error);
    }
}

const addVideoInLiked = async (video, VideoDispatch, token) => {
    console.log(video)
    try {
        const {data} = await axios.post("/api/user/likes",{video}, {
            headers: {authorization:  token}
        },)
        console.log(data)
        VideoDispatch({
            type: "ADD_LIKEDVIDEO",
            payload: data.likes
        })
    } catch (error) {
        console.log(error)
    }
}

const removeVideoFromLiked = async (videoId, VideoDispatch, token) => {
    try {
        const {data} = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: {authorization:  token}
        })
        VideoDispatch({
            type: "ADD_LIKEDVIDEO",
            payload: data.likes
        })
    } catch (error) {
        console.log(error)
    }
}

export { getVideosDataFromServer, addVideoInLiked, removeVideoFromLiked };