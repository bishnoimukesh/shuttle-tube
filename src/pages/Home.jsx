import { Box, Image, Button, Text  } from '@chakra-ui/react'
import { Navbar } from '../components'
import { Link } from 'react-router-dom'
import badminton from '../asset/badminton.png'

const Home = () => {
    return (
        <Box>
            <Navbar/>
            <Box display={'flex'} justifyContent={'center'} >
                <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignItems={'center'}>
                    <Image src={badminton} alt='homepage wallpaper'/>
                    <Text fontSize={'1.3rem'} top={'25%'} w={'60%'} fontWeight='500'>
                        Online Badminton Video Library. Discover a unique way of receiving badminton coaching, 
                        with information and playing analysis available to you wherever you looking for.
                    </Text>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={'2rem'}>
                <Button size='lg' borderRadius={'10'} p={'4'} alignItems={'center'} justifyContent={'center'}>
                    <Link to='/explore'>
                        Explore More →
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}

export {Home}