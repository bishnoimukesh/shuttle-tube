import { useParams } from "react-router-dom"
import {Box} from '@chakra-ui/react'

const VideoPlayer = () => {
    const { videoId } = useParams();
    return (
        <Box
        pos={'relative'}
        overflow= {'hidden'}
        width= {'95vh'}
        padding-top= {'57.25%'}>
            <iframe
                position= {'absolute'}
                width= {'100%'}
                height= {'100%'}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </Box>
    )
}
export { VideoPlayer }