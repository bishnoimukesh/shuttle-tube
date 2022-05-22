const VideoReducer = (state, {type, payload}) => {
    switch (type) {
        case "FILTER_BY_SEARCH":
            return {
                ...state,
                search: payload
            }
            default:
                return state;
            }
    };

export {VideoReducer};