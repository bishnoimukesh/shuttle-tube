import { useParams } from 'react-router-dom';
import {VideoPlayer} from "../components"
import {useVideo} from "../context/videoContext"
import {Grid, GridItem, Box, Heading, Text} from "@chakra-ui/react"
import { Navbar, Sidebar} from '../components';

const SingleVideo = () => {
    const { videoData } = useVideo();
    const { videoId } = useParams();
    const video = videoData?.find(({ _id }) => _id === videoId)
    const {title, description, duration, views, uploaded, categoryName, creator} = video;

    return (
        <Grid h='200px' templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem rowSpan={2} colSpan={1}>
                    <Sidebar/>
                </GridItem>
                <GridItem colSpan={4} >
                        <Navbar/>
                </GridItem>
                <GridItem colSpan={4} >
                    <Box >
                        <VideoPlayer/>
                        <Box display={'flex'} flexDir={'column'} flexWrap={'wrap'} >
                            <Heading size={'md'} mt={'4'}>{title}</Heading>
                            <Box display={'flex'} flexWrap={'wrap'} mt={'2'} mb={'2'}>
                                    <Text fontSize={'sm'}>{views} views</Text>
                                    <Box ml={'2'}>
                                </Box>
                            </Box>
                            <Box display={'flex'} flexWrap={'wrap'} >
                                <Text fontSize='sm'>{description}</Text>
                            </Box>
                            <Box display={'flex'} flexWrap={'wrap'} >
                                <Text fontSize={'xl'}>{creator}</Text>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
    )
}

export {SingleVideo}