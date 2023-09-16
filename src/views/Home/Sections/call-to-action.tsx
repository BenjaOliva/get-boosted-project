import {
  Flex,
  chakra,
  Stack,
  Image,
  Box,
  Center,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

const CallToAction = () => {
  return (
    <Center
      px={8}
      py={8}
      pt={'5rem'}
      mt={'2.5rem'}
      mx="auto"
      maxW={'5xl'}
      bgColor={'gray.800'}
      borderRadius={'lg'}
      overflow={'hidden'}>
      <Box
        w={{
          base: 'full',
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        pr={{
          md: 15,
        }}>
        <chakra.h2
          fontSize={{
            base: '2xl',
            sm: '2xl',
          }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color="white"
          _dark={{
            color: 'gray.100',
          }}
          mb={6}>
          <chakra.span display="block">Get Linear Early Access</chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{
            base: 'lg',
            md: 'lg',
          }}
          color="gray.100"
          _dark={{
            color: 'gray.300',
          }}>
          We're gradually opening up early access to companies and teams.
        </chakra.p>
        <SimpleGrid
          as="form"
          columns={{
            base: 1,
            lg: 6,
          }}
          spacing={3}
          p={2}
          borderRadius={'lg'}
          bgColor={'gray.700'}
          mx="auto"
          mb={8}>
          <GridItem
            as="label"
            colSpan={{
              base: 'auto',
              lg: 4,
            }}
            p={2.5}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="> enter your email..."
              required
              variant={'unstyled'}
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{
              base: 'auto',
              lg: 2,
            }}
            size="md"
            h="full"
            type="submit"
            bgColor={'brand.50'}
            cursor="pointer">
            Request access
          </Button>
        </SimpleGrid>
      </Box>
      <Box
        w={{
          base: 'full',
          md: 10 / 12,
        }}
        mx="auto"
        textAlign="center"
        pos={'relative'}
        overflow={'unset'}>
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
          pos={'absolute'}
          right={'-6rem'}
          bottom={'-15rem'}
        />
      </Box>
    </Center>
  );
};

export default CallToAction;
