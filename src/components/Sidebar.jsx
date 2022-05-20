import { useState } from 'react'
import {Flex, Text, IconButton, Divider, Avatar, Heading} from '@chakra-ui/react'
import {FiMenu, FiHome} from 'react-icons/fi'
import {FaHistory} from 'react-icons/fa'
import {MdExplore, MdPlaylistAdd, MdWatchLater} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'
import {NavItem} from '../components/NavItem'

const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="2"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.45)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "80px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                mt='4'
                p="2%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
            >
                
                <IconButton 
                    background="none"
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Home" />
                <NavItem navSize={navSize} icon={MdExplore} title="Explore" mt={0}/>
                <NavItem navSize={navSize} icon={MdPlaylistAdd} title="PlayList" mt={0}/>
                <NavItem navSize={navSize} icon={AiFillLike} title="Liked" mt={0}/>
                <NavItem navSize={navSize} icon={MdWatchLater} title="Watch Later" mt={0}/>
                <NavItem navSize={navSize} icon={FaHistory} title="History" mt={0}/>
            </Flex>

            <Flex
                p="2%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} px={2} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Mukesh Bishnoi</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export {Sidebar}