import {Box, Button, Heading, Input, Link} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useVideo } from '../context/videoContext';
import { Link as ReachLink } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const Navbar = () => {
    const {VideoDispatch} = useVideo();
    const {authState:{isLogin},authDispatch} = useAuthContext();
    const logoutHandler = () => {
        localStorage.clear();
        authDispatch({ type: "LOGOUT_SUCCESS" })
    }
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" p="1rem">
            <Box display="flex" alignItems="center" >
                <Heading>Shuttle-Tube</Heading>
            </Box>
            <Input htmlSize={26} width='auto' placeholder="Search" 
            onChange={(e) => VideoDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })} />
            <Box display="flex" alignItems="center">
                <Link as={ReachLink} to="/login">
                {isLogin?<Button
                type={"submit"}
                colorScheme={"red"}
                my={"4"}
                onClick={logoutHandler}
                >
                    Logout
                </Button>:
                <Link to="/login">
                    <Button
                        type={"submit"}
                        colorScheme={"red"}
                        my={"4"}
                    >
                    Login
                </Button>
                </Link>}
            </Link>
                <ColorModeSwitcher fontSize="xl" />
            </Box>
        </Box>
    )
}

export {Navbar}