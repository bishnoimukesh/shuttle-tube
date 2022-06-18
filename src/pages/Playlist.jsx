import {Grid, GridItem, Box, Button} from "@chakra-ui/react"
import { Navbar, Sidebar } from "../components";
import { useAuthContext } from "../context/authContext";
import { useVideo } from "../context/videoContext";
import { useNavigate } from 'react-router-dom';
import {PlaylistCard} from '../components/PlaylistCard'

const Playlist = () => {
    const {VideoState: { playlists }, VideoDispatch} = useVideo();
    const {authState:{token, isLogin}} = useAuthContext();
    const navigate = useNavigate();

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
                <Box ml={'4'} mr={'4'} pb={'8'} display={'flex'} flexWrap={'wrap'} >
                    {playlists.map((playlist) => (
                        <Box position={'relative'}>
                            <PlaylistCard playlistCardData={playlist} key={playlist._id}/>
                            {/* <Button position={'absolute'} top={'6'} left={'6'} onClick={()=>removePlaylistHandler(playlist._id)}>
                                <DeleteIcon w={6} h={6}/>
                            </Button> */}
                        </Box> 
                    ))}
                </Box>
            </GridItem>
        </Grid>
    )
}

export {Playlist}