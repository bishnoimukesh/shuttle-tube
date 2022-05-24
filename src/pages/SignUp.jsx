import {Box, Button, FormControl, FormLabel, Input, Link, useToast} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {useReducer} from 'react'
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import {useAuthContext} from '../context/authContext'
import { signUpReducer } from '../reducer/authReducer';
import axios from 'axios';


const SignUp = () => {
    const {authDispatch} = useAuthContext();
    const [signUpState, signUpDispatch] = useReducer(signUpReducer, {firstName:"", lastName:"", email: "", password: ""});
    const {firstName, lastName, email, password} = signUpState;
    const navigate = useNavigate();
    const toast = useToast();

    const submitHandler = async (e, firstName, lastName, email, password) => {
        console.log(firstName, lastName, email, password);
        e.preventDefault();
        try {
            const res = await axios.post("api/auth/signup", {firstName, lastName, email, password})
            console.log("res")
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(res.data.createdUser));
            authDispatch({type: "TOKEN_RECEIVED", payload: res.data.encodedToken});
            authDispatch({type: "USER_RECEIVED", payload: res.data.createdUser});
            toast({
                title: 'SignUp Successfull!',
                position: 'top-right',
                variant: 'solid',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: `${error}`,
                position: 'top-center',
                variant: 'solid',
                status: 'error',
                duration: 2500,
                isClosable: true,
            });
        }finally{
            navigate("/");
        }
    }
    return (
        <>
        <Navbar/>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'4'} h={'80vh'}>
        <FormControl maxWidth={'500'} mx={'2'} isRequired 
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.45)" 
            border={'20px'} px={'8'} py={'2'} borderRadius={'10'}
            onSubmit={(e) => submitHandler(e, firstName, lastName, email, password)}>
            <FormLabel htmlFor={"firstName"} my={"4"}>
            First Name
            </FormLabel>
            <Input
            id={"firstName"}
            type={"text"}
            placeholder={"First Name"}
            onChange={(e) => signUpDispatch({ type: "FIRST_NAME_CHANGED", payload: e.target.value })}
            />
            <FormLabel htmlFor={"lastName"} my={"4"}>
            Last Name
            </FormLabel>
            <Input
            id={"lastName"}
            type={"text"}
            placeholder={"Last Name"}
            onChange={(e) => signUpDispatch({ type: "LAST_NAME_CHANGED", payload: e.target.value })}
            />
            <FormLabel htmlFor={"email"} my={"4"}>
            Email address
            </FormLabel>
            <Input
            id={"email"}
            type={"email"}
            placeholder={"Enter email"}
            onChange={(e) => signUpDispatch({ type: "EMAIL_CHANGED", payload: e.target.value })}
            />
            <FormLabel htmlFor={"password"} my={"4"}>
            Password
            </FormLabel>
            <Input
            id={"password"}
            type={"password"}
            placeholder={"Enter Password"}
            onChange={(e) => signUpDispatch({ type: "PASSWORD_CHANGED", payload: e.target.value })}
            />
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Button
                type={"submit"}
                colorScheme={"red"}
                my={"4"}
                rightIcon={<ArrowForwardIcon />}
                onClick={(e) => submitHandler(e, firstName, lastName, email, password)}
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