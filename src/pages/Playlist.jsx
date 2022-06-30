import {Grid, GridItem, Box} from "@chakra-ui/react"
import { Navbar, Sidebar } from "../components";
import { useVideo } from "../context/videoContext";
import {PlaylistCard} from '../components/PlaylistCard'

const Playlist = () => {
    const {VideoState: { playlists }} = useVideo();

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
                        </Box> 
                    ))}
                </Box>
            </GridItem>
        </Grid>
    )
}

export {Playlist}