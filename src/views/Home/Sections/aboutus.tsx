import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import { IconBrandLinkedin, IconBrandTwitter } from 'tabler-icons';

const AboutUs = () => {
  const Member = props => {
    return (
      <Flex color="white" borderWidth={0.5} borderColor={'transparent'}>
        <Stack spacing={3} ml={4} py="1.7rem" px={'0.5rem'}>
          <Avatar size="md" name={props.name} src={props.src} />
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color="white">
            {props.title}
          </chakra.dt>
          <chakra.dd>{props.children}</chakra.dd>
          <HStack color="brand.50">
            <IconBrandTwitter size={'1.2rem'} />
            <IconBrandLinkedin size={'1.2rem'} />
          </HStack>
        </Stack>
      </Flex>
    );
  };

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
            mb={10}
            textAlign={{
              lg: 'left',
            }}>
            <chakra.h2
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              color={'brand.50'}>
              About us
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
              The Linear team
            </chakra.p>
            <chakra.p
              mt={4}
              fontSize="xl"
              color="gray.500"
              _dark={{
                color: 'gray.400',
              }}>
              Our team has led, scaled and delivered large scale software and
              design projects at multiple startups and high-growth enviroments
              like Uber, Airbnb and Coinbase.
            </chakra.p>
          </Stack>
          <Box py="1rem">
            <Divider />
          </Box>
          <Box mt={10}>
            <Stack
              spacing={0}
              display={{
                md: 'grid',
              }}
              gridTemplateColumns={{
                md: 'repeat(3,1fr)',
              }}
              gridColumnGap={{
                md: 1,
              }}
              gridRowGap={{
                md: 1,
              }}>
              <Member
                name="Tomas Artman"
                src={
                  'https://boosted-dev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06f4de1a-f698-45cd-9cb2-bef2c3c4a7a5%2Fktal90.jpg?table=block&id=a2fe2642-2761-4f09-9427-198764008fe3&spaceId=42aefeb5-3429-4b1a-a3e9-57e49dba7011&width=400&userId=&cache=v2'
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Member>

              <Member
                name="Tomas Artman"
                src={
                  'https://boosted-dev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06f4de1a-f698-45cd-9cb2-bef2c3c4a7a5%2Fktal90.jpg?table=block&id=a2fe2642-2761-4f09-9427-198764008fe3&spaceId=42aefeb5-3429-4b1a-a3e9-57e49dba7011&width=400&userId=&cache=v2'
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Member>

              <Member
                name="Tomas Artman"
                src={
                  'https://boosted-dev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06f4de1a-f698-45cd-9cb2-bef2c3c4a7a5%2Fktal90.jpg?table=block&id=a2fe2642-2761-4f09-9427-198764008fe3&spaceId=42aefeb5-3429-4b1a-a3e9-57e49dba7011&width=400&userId=&cache=v2'
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Member>
            </Stack>
          </Box>

          <Text fontSize={'xl'} pt="1rem" color="gray.600">
            More integrations comming soon...
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUs;
