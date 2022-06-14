import { useParams, useNavigate } from 'react-router-dom';
import {VideoPlayer, Navbar, Sidebar} from "../components"
import {useVideo} from "../context/videoContext"
import {Grid, GridItem, Box, Heading, Text, Button, Modal, ModalOverlay, 
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, 
    useDisclosure, Input, Checkbox, List} from "@chakra-ui/react"
import {BiLike} from "react-icons/bi"
import {AiFillLike} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"
import {BsStopwatchFill} from "react-icons/bs"
import {CgPlayListAdd} from "react-icons/cg"
import { isVideoInLiked, isVideoInWatchLater, isVideoInPlaylist } from '../utilities/videosFunction';
import {addVideoInLiked, removeVideoFromLiked, addVideoInWatchLater, removeVideoFromWatchLater, createPlaylist, 
    addVideoToPlaylist, removeVideoFromPlaylist} from '../utilities/httpsHelper';
import {useAuthContext} from '../context/authContext';
import { useState } from 'react';

const SingleVideo = () => {
    const navigate = useNavigate();
    const { videoData,  VideoDispatch, VideoState: {LikedVideos, watchLaterList, playlists} } = useVideo();
    const { videoId } = useParams();
    const {authState: {token, isLogin}} = useAuthContext();
    const video = videoData?.find(({ _id }) => _id === videoId);
    const {title, description, views, creator} = video??{};
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [playlistTitle, setPlaylistTitle] = useState("");

    const likeHandler = () => {
        if (isLogin) {
            if (isVideoInLiked(video._id, LikedVideos)) {
                removeVideoFromLiked(video._id, VideoDispatch, token);
                } else {
                addVideoInLiked(video, VideoDispatch, token);
                }
            } 
        else {
            navigate('/login');
        }
    }

    const watchLaterHandler =()=>{
        if (isLogin) {
            if (isVideoInWatchLater(video._id, watchLaterList)) {
            removeVideoFromWatchLater(video._id, VideoDispatch, token);
            } else {
            addVideoInWatchLater(video, VideoDispatch, token);
            }
        } else {
            navigate("/login");
        }
    };

    const createPlaylistHandler = () =>{
        if (isLogin) {
            createPlaylist(playlistTitle, VideoDispatch, token);
            setPlaylistTitle("")
        }else {
            navigate('/login')
        }
    }

    const removeVideoFromPlaylistHandler=()=>{
        if (isLogin) {
            removeVideoFromPlaylist(video._id, VideoDispatch, token);
        }
        else {
            navigate('/login')
        }
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
                <Box ml={'4'} mr={'4'} pb={'8'} >
                    <VideoPlayer/>
                    <Box display={'flex'} flexDir={'column'} flexWrap={'wrap'} >
                        <Heading size={'md'} mt={'4'}>{title}</Heading>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} mt={'2'} mb={'2'}>
                            <Text display={'flex'} alignItems={'center'} fontSize={'sm'}>{views} views</Text>
                            <Box ml={'2'}>
                                {isVideoInLiked(video?._id, LikedVideos) ? (
                                    <Button bg={'transparent'} onClick={likeHandler}>
                                        <AiFillLike size={'1.2rem'}/> Unlike
                                    </Button>):(
                                    <Button bg={'transparent'} onClick={likeHandler}>
                                        <BiLike size={'1.2rem'}/> Like
                                    </Button>)
                                }
                                {isVideoInWatchLater(video?._id, watchLaterList) ? 
                                (<Button bg={'transparent'} onClick={watchLaterHandler}>
                                    <BsStopwatchFill size={'1rem'}/> Remove from Watch Later
                                </Button>):
                                (<Button bg={'transparent'} onClick={watchLaterHandler}>
                                    <BsStopwatch size={'1rem'}/> Watch Later
                                </Button>)}
                                <Button onClick={onOpen} bg={'transparent'}>
                                    <CgPlayListAdd size={'1.5rem'} />Add to Playlist
                                </Button>
                                <Modal isOpen={isOpen} onClose={onClose}> 
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Playlist</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text count={2} />
                                        {playlists?.map(playlist =>
                                            <List >
                                                <Checkbox
                                                checked = {()=>isVideoInPlaylist(playlists, playlist._id, videoId)?? false}
                                                onChange={()=>isVideoInPlaylist(playlists, playlist._id, videoId) ? 
                                                removeVideoFromPlaylistHandler(video._id, playlist._id, VideoDispatch, token)
                                                : addVideoToPlaylist(video, playlist._id, VideoDispatch, token) }>
                                                {playlist.title}
                                                </Checkbox>
                                            </List>
                                        )}
                                        <Input placeholder='Create playlist' onChange={(e)=>setPlaylistTitle(e.target.value)} />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={createPlaylistHandler}>
                                        Create Playlist
                                        </Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
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