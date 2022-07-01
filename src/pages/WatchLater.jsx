import {Grid, GridItem, Box, Button} from "@chakra-ui/react"
import { useVideo } from "../context/videoContext";
import { Card, Navbar, Sidebar } from "../components";
import { useAuthContext } from "../context/authContext";
import {BsStopwatchFill} from "react-icons/bs"
import { removeVideoFromWatchLater } from "../utilities/httpsHelper";

const WatchLater = () => {
    const {VideoState: { watchLaterList }, VideoDispatch} = useVideo();
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
                    <Box ml={'4'} mr={'4'} pb={'8'} display={'flex'} flexWrap={'wrap'}>
                        {watchLaterList.map((video) => (
                            <Box position={'relative'}>
                                <Card cardData={video} key={video._id} />
                                <Button position={'absolute'} bg={'red'} top={'0'} borderRadius={'10'} p={'2'} 
                                onClick={()=>removeVideoFromWatchLater(video._id,VideoDispatch,token)}>
                                    <BsStopwatchFill size={'1.5rem'}/>
                                </Button>
                            </Box> 
                        ))}
                    </Box>
                </GridItem>
            </Grid>
    )
}

export {WatchLater}