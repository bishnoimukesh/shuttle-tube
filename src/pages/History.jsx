import {Grid, GridItem, Box, Button} from "@chakra-ui/react"
import {Card, Sidebar, Navbar} from '../components'
import {useAuthContext} from '../context/authContext'
import {useVideo} from '../context/videoContext'
import { removeAllVideoFromHistory, removeVideoFromHistory } from '../utilities/httpsHelper';
import {AiFillDelete} from 'react-icons/ai'

const History = () => {
    const {authState:{token}} = useAuthContext();
    const {VideoState:{history}, VideoDispatch} = useVideo();
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
                        <Button onClick={()=>removeAllVideoFromHistory(VideoDispatch, token)}>Clear History</Button>
                    <Box ml={'4'} mr={'4'} pb={'8'} display={'flex'} flexWrap={'wrap'} >
                        {history?.map((video) => (
                            <Box position={'relative'}>
                            <Card cardData={video} key={video._id} />
                            <Button position={'absolute'} bg={'red'} top={'0'} borderRadius={'10'} p={'2'} 
                            id={video._id} onClick={(e)=>removeVideoFromHistory(e.target.id,VideoDispatch,token)}>
                                <AiFillDelete size={'1.5rem'}/>
                            </Button>
                        </Box> 
                        ))}
                    </Box>
                </GridItem>
            </Grid>
    )
}

export {History}