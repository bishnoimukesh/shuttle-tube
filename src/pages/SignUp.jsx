import {Box, Button, FormControl, FormLabel, Input, Link} from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import { Navbar } from '../components';

const SignUp = () => {
    
    return (
        <>
        <Navbar/>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'4'} h={'80vh'}>
        <FormControl maxWidth={'500'} mx={'2'} isRequired 
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.45)" 
            border={'20px'} px={'8'} py={'2'} borderRadius={'10'}>
            <FormLabel htmlFor={"firstName"} my={"4"}>
            First Name
            </FormLabel>
            <Input
            id={"firstName"}
            type={"text"}
            placeholder={"First Name"}
            />
            <FormLabel htmlFor={"lastName"} my={"4"}>
            Last Name
            </FormLabel>
            <Input
            id={"lastName"}
            type={"text"}
            placeholder={"Last Name"}
            />
            <FormLabel htmlFor={"email"} my={"4"}>
            Email address
            </FormLabel>
            <Input
            id={"email"}
            type={"email"}
            placeholder={"Enter email"}
            />
            <FormLabel htmlFor={"password"} my={"4"}>
            Password
            </FormLabel>
            <Input
            id={"password"}
            type={"password"}
            placeholder={"Enter Password"}
            />
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Button
                type={"submit"}
                colorScheme={"red"}
                my={"4"}
                // rightIcon={<ArrowForwardIcon />}
            >
                Register
            </Button>
            <Link as={ReachLink} to="/login" fontSize={'16'}>
                Already have an Account?
            </Link>
            </Box>
        </FormControl>
        </Box>
        </>
    );
};

export { SignUp };