import { useParams } from 'react-router-dom';
import {VideoPlayer} from "../components"
import {useVideo} from "../context/videoContext"
import {Grid, GridItem, Box, Heading, Text, Button} from "@chakra-ui/react"
import { Navbar, Sidebar} from '../components';
import {BiLike} from "react-icons/bi"
// import {AiFillLike} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"
// import {BsStopwatchFill} from "react-icons/bs"
import {CgPlayListAdd} from "react-icons/cg"

const SingleVideo = () => {
    const { videoData } = useVideo();
    const { videoId } = useParams();
    const video = videoData?.find(({ _id }) => _id === videoId)
    const {title, description, views, creator} = video;

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
                    <Box ml={'4'} mr={'4'} >
                        <VideoPlayer/>
                        <Box display={'flex'} flexDir={'column'} flexWrap={'wrap'} >
                            <Heading size={'md'} mt={'4'}>{title}</Heading>
                            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} mt={'2'} mb={'2'}>
                                <Text display={'flex'} alignItems={'center'} fontSize={'sm'}>{views} views</Text>
                                <Box ml={'2'}>
                                    <Button bg={'transparent'}>
                                        <BiLike size={'1.2rem'}/> Like
                                    </Button>
                                    <Button bg={'transparent'}>
                                        <BsStopwatch size={'1rem'}/> Watch Later
                                    </Button>
                                    <Button bg={'transparent'}>
                                        <CgPlayListAdd size={'1.5rem'}/> Add to playlist
                                    </Button>
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