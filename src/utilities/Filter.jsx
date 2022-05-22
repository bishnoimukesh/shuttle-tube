const Filter = (videosData, search) => {
    let videos = videosData;

    if (search) {
        videos = videos.filter(item =>
            item.title.toLowerCase().includes(search)
        );
    }
    return videos;
}

export { Filter }