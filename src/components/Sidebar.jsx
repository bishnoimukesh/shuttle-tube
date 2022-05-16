import React, { useState } from 'react'
import {Flex, Text, IconButton, Divider, Avatar, Heading} from '@chakra-ui/react'
import {FiMenu, FiHome} from 'react-icons/fi'
import {FaHistory} from 'react-icons/fa'
import {MdExplore, MdPlaylistAdd, MdWatchLater} from 'react-icons/md'
import NavItem from '../components/NavItem'

const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
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
                <NavItem navSize={navSize} icon={MdExplore} title="Explore" />
                <NavItem navSize={navSize} icon={MdPlaylistAdd} title="PlayList" />
                <NavItem navSize={navSize} icon={MdWatchLater} title="Watch Later" />
                <NavItem navSize={navSize} icon={FaHistory} title="History" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export {Sidebar}