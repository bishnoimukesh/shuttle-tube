import {Flex, Text, Icon, Link, Menu, MenuButton} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

const NavItem = ({ icon, title, active, navSize, to }) => {
    return (
        <Flex
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link as={RouterLink} to={to}
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "red" }}
                    w={navSize === "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex alignItems={'center'}>
                            <Icon as={icon} fontSize="xl" color={active ? "red" : "gray.500"} />
                            <Text ml={5} fontSize="md" display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export {NavItem}