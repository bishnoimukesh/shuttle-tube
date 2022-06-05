const isVideoInLiked = (videoId, likedVideo) => {
    return likedVideo.find(({_id}) => _id === videoId)
}

const isVideoInWatchLater = (videoId, watchLater) => {
    return watchLater.find(({_id}) => _id === videoId)
}

const isVideoInPlaylist = (playlist, playlistTitleId, videoId) => {
    return playlist.find(({ _id }) => _id === playlistTitleId)?.videos.some(({ _id }) => _id === videoId)
}

export {isVideoInLiked, isVideoInWatchLater, isVideoInPlaylist};