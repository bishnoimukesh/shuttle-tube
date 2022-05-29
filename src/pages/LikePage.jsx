import {Box, Grid, GridItem, Button} from '@chakra-ui/react'
import {useVideo} from '../context/videoContext'
import {useAuthContext} from '../context/authContext'
import {Card, Sidebar, Navbar} from '../components'
import {AiFillLike} from "react-icons/ai"
import {removeVideoFromLiked} from '../utilities/httpsHelper';

const LikePage = () => {
    const {VideoState:{LikedVideos},VideoDispatch} = useVideo();
    const {authState:{token}} = useAuthContext();

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
                    <Box ml={'4'} mr={'4'} pb={'8'} >
                        {LikedVideos?.map(video => (
                            <Box position={'relative'}>
                                <Card cardData={video} key={video._id} />
                                <Button position={'absolute'} bg={'transparent'} top={'0'} id={video._id} onClick={(e)=>removeVideoFromLiked(e.target.id,VideoDispatch,token)}>
                                    <AiFillLike size={'1.5rem'}/>
                                </Button>
                            </Box> 
                        ))}
                        </Box>
                </GridItem>
            </Grid>
    )
}

export {LikePage}