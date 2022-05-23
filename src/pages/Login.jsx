import {Box, Button, FormControl, FormLabel, Input, Link} from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import { Navbar } from '../components';

const Login = () => {
    
    return (
        <>
            <Navbar/>
            <Box display={"flex"} justifyContent={"center"} alignItems={'center'} h={'80vh'} >
            <FormControl maxWidth={'400'} mx={'2'} isRequired 
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.45)" 
            border={'20px'} p={'8'} borderRadius={'10'}>
                <FormLabel htmlFor={"email"} my={"4"}>
                Email address
                </FormLabel>
                <Input
                type={"email"}
                placeholder={"Enter email"}
                />
                <FormLabel htmlFor={"password"} my={"4"}>
                Password
                </FormLabel>
                <Input
                type={'password'}
                placeholder={"Enter Password"}
                />
                <Box display={"flex"} alignItems={"center"} justifyContent="space-between">
                <Button
                    type={"submit"}
                    // rightIcon={<ArrowForwardIcon />}
                    colorScheme={"red"}
                    my={"4"} px={"8"}
                >
                    Login
                </Button>
                <Link as={ReachLink} to="/signup" fontSize={'16'}>
                    Create an Account
                </Link>
                </Box>
                <Button
                type={"button"}
                // rightIcon={<ArrowForwardIcon />}
                colorScheme={"red"}
                my={"4"}
                // onClick={() =>
                //     submitFormHandler({
                //     email: 'test@gmail.com',
                //     password: 'testdata',
                //     })
                // }
                w={"100%"}
                >
                Login as Guest
                </Button>
            </FormControl>
            </Box>
        </>
    );
};

export { Login };