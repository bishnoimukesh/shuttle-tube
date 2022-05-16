import {Box, Button, Heading} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" p="1rem">
            <Box display="flex" alignItems="center" >
                <Heading>Shuttle-Tube</Heading>
            </Box>
            <Box display="flex" alignItems="center">
                <Button bg="red" size="md">
                    Button
                </Button>
                <ColorModeSwitcher fontSize="xl" />
            </Box>
        </Box>
    )
}

export {Navbar}