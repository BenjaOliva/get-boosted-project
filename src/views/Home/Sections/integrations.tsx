import React from 'react';
import { Box, Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';

const Integrations = () => {
  const Feature = props => {
    return (
      <Flex
        color="white"
        bgColor={'#27282D'}
        borderWidth={0.5}
        borderColor={'transparent'}>
        <Stack spacing={3} ml={4} p="2rem">
          <Icon
            boxSize={8}
            color="brand.50"
            stroke="currentColor"
            aria-hidden="true">
            {props.icon}
          </Icon>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color="white">
            {props.title}
          </chakra.dt>
          <chakra.dd>{props.children}</chakra.dd>
        </Stack>
      </Flex>
    );
  };

  return (
    <Flex px={20} py={10} w="auto" textAlign={'left'} bgColor="#1a1921">
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
              color={'brand.50'}>
              Integrations
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
              Build for your workflow
            </chakra.p>
            <chakra.p
              mt={4}
              fontSize="xl"
              color="gray.500"
              _dark={{
                color: 'gray.400',
              }}>
              To help improve your team's productivity, Linear ties into
              existing tools, services and workflow.
            </chakra.p>
          </Stack>

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
              <Feature
                title="GitHub"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature
                title="Slack"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature
                title="CLI"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>
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

export default Integrations;
