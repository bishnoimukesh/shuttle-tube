import {Grid, GridItem, Box, Button} from "@chakra-ui/react"
import { Navbar, Sidebar } from "../components";
import { useVideo } from "../context/videoContext";
import { useParams } from 'react-router-dom';
import {Card} from "../components/Card";
import { DeleteIcon } from "@chakra-ui/icons";
import { removeVideoFromPlaylist } from "../utilities/httpsHelper";
import { useAuthContext} from "../context/authContext";

const PlaylistItem = () => {
    const {VideoState: { playlists }, VideoDispatch} = useVideo();
    const {authState:{token}} = useAuthContext();
    const {playlistId} = useParams();
    const currentPlaylist = playlists.find(({ _id }) => _id === playlistId);
    const data = currentPlaylist?.videos;
    const removeVideoFromPlaylistHandler = (videoId) => {
        removeVideoFromPlaylist(videoId, VideoDispatch, token, playlistId)
    }
    
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
                    {data.map((video) => (
                        <Box position={'relative'}>
                            <Card cardData={video} key={video._id}/>
                            <Button position={'absolute'} top={'6'} right={'6'} onClick={()=>removeVideoFromPlaylistHandler(video._id)}>
                                <DeleteIcon w={6} h={6} />
                            </Button>
                        </Box>
                    ))}
                </Box>
            </GridItem>
        </Grid>
    )
}

export {PlaylistItem}