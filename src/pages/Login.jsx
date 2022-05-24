import {Box, Button, FormControl, FormLabel, Input, Link, useToast} from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
import {useReducer} from 'react'
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import {useAuthContext} from '../context/authContext'
import { loginReducer } from '../reducer/authReducer';
import axios from 'axios';

const Login = () => {
    const {authDispatch} = useAuthContext();
    const [loginState, loginDispatch] = useReducer(loginReducer, {email: "", password: ""});
    const {email, password} = loginState;
    const navigate = useNavigate();
    const toast = useToast();

    const submitFormHandler = async(e, email, password) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/auth/login", {email,password});
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(res.data.foundUser));
            authDispatch({type: "LOGIN_SUCCESS"});
            authDispatch({type: "TOKEN_RECEIVED", payload: res.data.encodedToken});
            authDispatch({type: "USER_RECEIVED", payload: res.data.foundUser});
            toast({
                title: 'Login Successfull!',
                position: 'top-center',
                status: 'success',
                variant: 'solid',
                duration: 2000,
                isClosable: true,
            });
            navigate("/");
        } catch (error) {
            toast({
                title: `${error}`,
                position: 'top-center',
                variant: 'solid',
                status: 'error',
                duration: 2500,
                isClosable: true,
            });
        }
    }

    return (
        <>
            <Navbar/>
            <Box display={"flex"} justifyContent={"center"} alignItems={'center'} h={'80vh'} >
            <FormControl maxWidth={'400'} mx={'2'} isRequired 
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.45)" 
            border={'20px'} p={'8'} borderRadius={'10'}
            onSubmit={(e) => submitFormHandler(e, email, password)}>
                <FormLabel htmlFor={"email"} my={"4"}>
                Email address
                </FormLabel>
                <Input
                type={"email"}
                placeholder={"Enter email"}
                value={email}
                id={'email'}
                onChange={(e) => loginDispatch({ type: "EMAIL_CHANGED", payload: e.target.value })}
                />
                <FormLabel htmlFor={"password"} my={"4"}>
                Password
                </FormLabel>
                <Input
                type={'password'}
                placeholder={"Enter Password"}
                id={'password'}
                value={password}
                onChange={(e) => loginDispatch({ type: "PASSWORD_CHANGED", payload: e.target.value })} 
                />
                <Box display={"flex"} alignItems={"center"} justifyContent="space-between">
                <Button
                    type={"submit"}
                    // rightIcon={<ArrowForwardIcon />}
                    colorScheme={"red"}
                    my={"4"} px={"8"}
                    onClick={(e) => submitFormHandler(e, email, password)}
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
                onClick={(e) =>
                    submitFormHandler(e,
                    'adarshbalika@gmail.com',
                    'adarshBalika123',
                    )
                }
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