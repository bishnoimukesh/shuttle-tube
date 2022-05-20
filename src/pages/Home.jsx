import { Grid, GridItem } from '@chakra-ui/react'
import {Navbar, Sidebar, Card} from '../components/index'

const Home = () => {
    return (
        <>
            <Grid h='200px' templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem rowSpan={2} colSpan={1}>
                    <Sidebar/>
                </GridItem>
                <GridItem colSpan={4} >
                        <Navbar/>
                </GridItem>
                <GridItem colSpan={4} >
                        <Card/>
                </GridItem>
            </Grid>
        </>
    )
}

export  {Home}