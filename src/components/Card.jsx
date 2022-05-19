import {Box, Center, Heading, Text, Stack, Avatar, Image} from '@chakra-ui/react';

const Card = () => {
  return (
    <Center p={4}>
        <Box
        maxW={'280px'}
        minW={'240px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}
        justifyContent={'center'}
        alignContent={'center'}
        >
        <Box
            h={'150px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            >
            <Image
            src={
                'https://t3.ftcdn.net/jpg/03/10/62/12/360_F_310621281_foEqKBGtGlNWFQRePgdF5BpLOFyTsnzO.jpg'
            }
            height={'200px'}
            /> 
        </Box>
        <Stack pt={'8'}>
            <Heading
            fontSize={'xl'}>
            Shuttle video one
            </Heading>
            <Text color={'gray.500'} fontSize={'14'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
            </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>Video author</Text>
                <Text color={'gray.500'}>{} views · {} months ago</Text>
            </Stack>
        </Stack>
        </Box>
    </Center>
    );
}

export {Card}