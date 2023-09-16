import {
  chakra,
  Button,
  Box,
  Image,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
} from '@chakra-ui/react';
import { bannerImage } from '../../../assets';
const Hero = () => {
  return (
    <Box px={8} py={24} mx="auto" pt="10rem">
      <Box
        w={{
          base: 'full',
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: 'left',
          md: 'center',
        }}>
        <chakra.h1
          mb={6}
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: 'normal',
            md: 'tight',
          }}
          color="white">
          {`The issue tracking tool you'll enjoy using`}
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: 'lg',
            md: 'xl',
          }}
          color="gray.600"
          _dark={{
            color: 'gray.300',
          }}>
          Linear lets you manage software development and track bugs. Linear's
          streamlined design is built for speed and efficiency -- helping high
          performing teams accomplish great things.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{
            base: 'full',
            md: 7 / 12,
          }}
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
            size="lg"
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
        mt={20}
        textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src={bannerImage}
          alt="Software image screenshot"
        />
      </Box>
    </Box>
  );
};

export default Hero;
