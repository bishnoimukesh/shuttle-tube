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

const addVideoInWatchLater = async (video, VideoDispatch, token) => {
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

const createPlaylist = async (playlistTitle, VideoDispatch, token) => {
    try {
        const {data} = await axios.post("/api/user/playlists",{playlist:{title:playlistTitle}}, {
            headers: {
                authorization:  token
            }
        },)
        console.log(data)
        VideoDispatch({
            type: "CREATE_PLAYLIST",
            payload: data.playlists
        })
    } catch (error) {
        console.log(error)
    }
}

const addVideoToPlaylist = async (video,playlistId, VideoDispatch, token) => {
    try {
        const {data} = await axios.post(`/api/user/playlists/${playlistId}`,{video}, {
            headers: {authorization:  token}
        },)
        VideoDispatch({
            type: "ADD_VIDEO_TO_PLAYLIST",
            payload: data.playlists
        })
    } catch (error) {
        console.log(error)
    }
}

const removePlaylist = async (playlistId, VideoDispatch, token) => {
    try {
        const {data} = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: {authorization:  token}
        })
        VideoDispatch({
            type: "DELETE_PLAYLIST",
            payload: data.playlists
        })
    } catch (error) {
        console.log(error)
    }
}

const removeVideoFromPlaylist = async (videoId, VideoDispatch, token, playlistId) => {
    try {
        const {data} = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: { authorization: token }
        })
        VideoDispatch({ 
            type: "REMOVE_VIDEO_FROM_PLAYLIST", 
            payload: data.playlists ,
        })
    } catch (error) {
        console.log(error)
    }
}

export { getVideosDataFromServer, addVideoInLiked, removeVideoFromLiked, addVideoInWatchLater, 
        removeVideoFromWatchLater, createPlaylist, addVideoToPlaylist, removePlaylist, removeVideoFromPlaylist };