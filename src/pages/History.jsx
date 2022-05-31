import {Grid, GridItem, Box} from "@chakra-ui/react"
import {Card, Sidebar, Navbar} from '../components'
// import {useAuthContext} from '../context/authContext'
import {useVideo} from '../context/videoContext'
// import { removeAllVideoFromHistory, removeVideoFromHistory } from '../utilities/videosFunction';

const History = () => {
    // const {authState:{token}} = useAuthContext();
    const {VideoState:{history}} = useVideo();
    console.log(history);
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
                        {history?.map((video) => (
                            <Card cardData={video} key={video._id} />
                        ))}
                    </Box>
                </GridItem>
            </Grid>
    )
}

export {History}