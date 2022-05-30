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
            default:
                return state;
            }
    };

export {VideoReducer};