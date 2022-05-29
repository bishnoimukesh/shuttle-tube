const isVideoInLiked = (videoId, likedVideo) => {
    return likedVideo.find(({_id}) => _id === videoId)
}

export {isVideoInLiked}