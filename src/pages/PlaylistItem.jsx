import {Grid, GridItem, Box, Button} from "@chakra-ui/react"
import { Navbar, Sidebar } from "../components";
import { useVideo } from "../context/videoContext";
import { useParams } from 'react-router-dom';
import {Card} from "../components/Card";
import { DeleteIcon } from "@chakra-ui/icons";

const PlaylistItem = () => {
    const {VideoState: { playlists }} = useVideo();
    const {playlistId} = useParams();
    const currentPlaylist = playlists.find(({ _id }) => _id === playlistId);
    
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
                    {currentPlaylist?.videos.map((video) => (
                        <Box position={'relative'}>
                            <Card cardData={video} key={video._id}/>
                            <Button position={'absolute'} top={'6'} right={'6'}>
                                <DeleteIcon w={6} h={6}/>
                            </Button>
                            </Box>
                        ))}
                </Box>
            </GridItem>
        </Grid>
    )
}

export {PlaylistItem}