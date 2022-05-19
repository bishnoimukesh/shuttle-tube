import { Box } from '@chakra-ui/react'
import {Navbar, Sidebar, Card} from '../components/index'

const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            <Box display="flex" >
                <Sidebar/>
                <Card />
            </Box>
        </>
    )
}

export  {Home}