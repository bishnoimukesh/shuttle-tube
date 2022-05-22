import {Box, Heading, Text, Stack, Avatar, Image} from '@chakra-ui/react';

const Card = ({cardData}) => {
    console.log(cardData.id);
    const { _id, title, creator, description, views, uploaded } = cardData;
  return (
    <Box p={4} display={'flex'}>
        <Box borderWidth="1px" 
        maxW={'280'}
        minW={'240'}
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
            height={'200'}
            /> 
        </Box>
        <Stack pt={'8'}>
            <Heading
            fontSize={'xl'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'} height={'6'}>
            {title}
            </Heading>
            <Text color={'gray.500'} fontSize={'14'} textOverflow={'ellipsis'} whiteSpace={'wrap'} overflow={'hidden'} height={'20'}>
                {description}
            </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>{creator}</Text>
                <Text color={'gray.500'}>{views} views · {uploaded} months ago</Text>
            </Stack>
        </Stack>
        </Box>
    </Box>
    );
}

export {Card}