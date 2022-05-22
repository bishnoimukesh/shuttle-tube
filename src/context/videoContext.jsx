import {createContext, useContext, useState, useEffect} from 'react';
import {getVideosDataFromServer} from '../utilities/httpsHelper';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoData,setVideoData] = useState([])
    useEffect(() => {
        getVideosDataFromServer()
        .then(data => setVideoData(data))
    }, [])

    return (
        <VideoContext.Provider value={{videoData,setVideoData }}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider }