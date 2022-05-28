import { useParams } from "react-router-dom"
import {AspectRatio} from '@chakra-ui/react'

const VideoPlayer = () => {
    const { videoId } = useParams();
    return (
        <AspectRatio ratio={2/1}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Shuttle Tube player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </AspectRatio>
    )
}
export { VideoPlayer }