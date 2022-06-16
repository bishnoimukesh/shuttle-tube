const VideoReducer = (state, {type, payload}) => {
    switch (type) {
        case "FILTER_BY_SEARCH":
            return {
                ...state,
                search: payload
            }
            case "ADD_LIKEDVIDEO":
            return{
                ...state,
                LikedVideos: payload
            }
            case "ADD_WATCH_LATER":
                return{
                    ...state,
                    watchLaterList: payload
                }
<<<<<<< HEAD
            case "CREATE_PLAYLIST":
                return{
                    ...state,
                    playlists : payload
                }
            case "DELETE_PLAYLIST":
                return{
                    ...state,
                    playlists: payload
                }
            case "ADD_VIDEO_TO_PLAYLIST":
                return{
                    ...state,
                    playlists: payload
                }
            case "REMOVE_VIDEO_FROM_PLAYLIST":
                console.log(payload)
                return{
                    ...state,
                    playlists: payload
=======
            case "ADD_HISTORY":
                return{
                    ...state,
                    history: payload
                }
            case "REMOVE_VIDEO_FROM_HISTORY":
                return{
                    ...state,
                    history: payload
                }
            case "CLEAR_HISTORY":
                return{
                    ...state,
                    history: payload
>>>>>>> 2321ae4a83e909b958c6d9afe5d5f10df1bc7928
                }
            default:
                return state;
            }
    };

export {VideoReducer};