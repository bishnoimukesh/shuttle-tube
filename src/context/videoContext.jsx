import {createContext, useContext, useState, useEffect, useReducer} from 'react';
import {getVideosDataFromServer} from '../utilities/httpsHelper';
import {VideoReducer} from '../reducer/videoReducer';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoData,setVideoData] = useState([])
    const [VideoState, VideoDispatch] = useReducer(VideoReducer, {
        search: "",
        LikedVideos: [],
        watchLaterList: [],
        playlists : []
    });

    useEffect(() => {
        console.log("useeffect running");
        (async () => {
            const data = await getVideosDataFromServer();
            setVideoData(data);
        })()
    }, [])

    return (
        <VideoContext.Provider value={{videoData,setVideoData, VideoState, VideoDispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider }