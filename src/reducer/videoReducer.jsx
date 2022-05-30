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
            default:
                return state;
            }
    };

export {VideoReducer};