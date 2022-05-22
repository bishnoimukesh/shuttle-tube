import { Grid, GridItem, Box } from '@chakra-ui/react'
import {Navbar, Sidebar, Card} from '../components/index'
import {useVideo} from '../context/videoContext'

const Home = () => {
    const {videoData} = useVideo();
    return (
        <>
            <Grid h='200px' templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem rowSpan={2} colSpan={1}>
                    <Sidebar/>
                </GridItem>
                <GridItem colSpan={4} >
                        <Navbar/>
                </GridItem>
                <GridItem colSpan={4} >
                    <Box display="flex" alignItems="center" flexWrap={'wrap'}>
                    {videoData.map(video => (
                        <Card cardData={video} key={video.id} />
                    ))}
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
}

export  {Home}