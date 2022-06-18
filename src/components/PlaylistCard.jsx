import { Box, Heading, Stack, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import { removePlaylist } from '../utilities/httpsHelper';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { useVideo } from '../context/videoContext';

const PlaylistCard = ({ playlistCardData }) => {
    const { videos, title, _id } = playlistCardData;
    const navigate = useNavigate();
    const {
        authState: { token, isLogin },
    } = useAuthContext();
    const {
        VideoState: { playlists },
        VideoDispatch,
    } = useVideo();

    const removePlaylistHandler = playlistId => {
        console.log('delete', playlistId);
        if (isLogin) {
        removePlaylist(playlistId, VideoDispatch, token);
        } else {
        navigate('/login');
        }
    };
    return (
        <Box p={4} display={'flex'}>
        <Box
            borderWidth="1px"
            maxW={'280'}
            minW={'240'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={4}
            overflow={'hidden'}
            justifyContent={'center'}
            alignContent={'center'}
        >
            <Link to={`/playlist/${_id}`}>
            <Box h={'150px'} bg={'gray.100'} mt={-6} mx={-6} mb={6}>
                <Image
                src={
                    'https://t3.ftcdn.net/jpg/03/10/62/12/360_F_310621281_foEqKBGtGlNWFQRePgdF5BpLOFyTsnzO.jpg'
                }
                height={'200'}
                />
            </Box>
            </Link>
            <Stack pt={'8'}>
            <Heading
                fontSize={'xl'}
                textOverflow={'ellipsis'}
                whiteSpace={'nowrap'}
                overflow={'hidden'}
                height={'6'}
            >
                {title}
                <Button
                position={'absolute'}
                top={'6'}
                right={'6'}
                onClick={() => removePlaylistHandler(playlists._id)}
                >
                    <DeleteIcon w={6} h={6} />
                </Button>
            </Heading>
            <Heading
                fontSize={'xs'}
                textOverflow={'ellipsis'}
                whiteSpace={'nowrap'}
                overflow={'hidden'}
                height={'3'}
            >
                {videos.length} Videos
            </Heading>
            </Stack>
        </Box>
        </Box>
    );
};

export { PlaylistCard };
