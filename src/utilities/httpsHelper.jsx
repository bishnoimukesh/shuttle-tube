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
    try {
        const {data} = await axios.post("/api/user/likes",{video}, {
            headers: {authorization:  token}
        },)
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

const addVideoInWatchLater = async (video, VideoDispatch, token) => {
    console.log("useeffect running");

    try {
        const {data} = await axios.post("/api/user/watchlater",{video}, {
            headers: {authorization:  token}
        },)
        VideoDispatch({
            type: "ADD_WATCH_LATER",
            payload: data.watchlater
        })
    } catch (error) {
        console.log(error)
    }
}

const removeVideoFromWatchLater = async (videoId, VideoDispatch, token) => {
    console.log("removed")
    try {
        const {data} = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: {authorization:  token}
        })
        VideoDispatch({
            type: "ADD_WATCH_LATER",
            payload: data.watchlater
        })
    } catch (error) {
        console.log(error)
    }
}

const addVideoInHistory = async (video, VideoDispatch, token) => {
    console.log("history")
    try {
        const {data} = await axios.post("/api/user/history",{video}, {
            headers: {authorization:  token}
        },)
        console.log({data})
        VideoDispatch({
            type: "ADD_HISTORY",
            payload: data.history
        })
    } catch (error) {
        console.log(error);
    }
}

const removeVideoFromHistory = async (videoId, VideoDispatch, token) => {
    try {
        const {data} = await axios.delete(`/api/user/history/${videoId}`, {
            headers: {authorization:  token}
        })
        VideoDispatch({
            type: "REMOVE_VIDEO_FROM_HISTORY",
            payload: data.history
        })
    } catch (error) {
        console.log(error)
    }
}

const removeAllVideoFromHistory = async (VideoDispatch, token) => {
    try {
        const {data} = await axios.delete(`/api/user/history/all`, {
            headers: {authorization:  token}
        })
        VideoDispatch({
            type: "CLEAR_HISTORY",
            payload: data.history
        })
    } catch (error) {
        console.log(error)
    }
}


export { getVideosDataFromServer, addVideoInLiked, removeVideoFromLiked, addVideoInWatchLater, 
    removeVideoFromWatchLater, addVideoInHistory, removeVideoFromHistory, removeAllVideoFromHistory };