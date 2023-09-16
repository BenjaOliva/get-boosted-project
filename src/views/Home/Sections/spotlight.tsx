import React from 'react';
import { Box, Center, Flex, Icon, Stack, chakra } from '@chakra-ui/react';
import ReactGifPlayer from 'react-gif-player';

const Spotlight = () => {
  return (
    <Flex px={20} py={10} w="auto" textAlign={'left'}>
      <Box py={12} rounded="xl">
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}>
          <Stack
            spacing={2}
            textAlign={{
              lg: 'left',
            }}>
            <chakra.h2
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              color="brand.50">
              Feature Spotlight
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{
                base: '3xl',
                sm: '4xl',
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="white">
              Meet your command line
            </chakra.p>
            <chakra.p
              mt={4}
              fontSize="xl"
              color="gray.500"
              _dark={{
                color: 'gray.400',
              }}>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p>
          </Stack>
        </Box>
        <Center p="5rem">
          <Box p={'5rem'} borderRadius={'xl'} bgColor={'orange.600'}>
            <ReactGifPlayer
              gif={
                'https://file.notion.so/f/s/d28bb297-925e-40ea-9af5-04b422fe9426/command-menu.gif?id=e56de44b-d6e5-4fd0-9c88-46dddb634c69&table=block&spaceId=42aefeb5-3429-4b1a-a3e9-57e49dba7011&expirationTimestamp=1694966400000&signature=ffgFmv-GRetbusB5qyseX5NY2MJiS6s0NTYzEsnb-q8'
              }
            />
          </Box>
        </Center>
      </Box>
    </Flex>
  );
};

export default Spotlight;
