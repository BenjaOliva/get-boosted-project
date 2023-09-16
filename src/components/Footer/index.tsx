import { Box, Button, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { Logo } from '../../resources/Logos';

const Footer = () => {
  return (
    <Box pt="3rem">
      <Stack
        spacing={{ base: '4', md: '5' }}
        color="white"
        borderTopWidth={2}
        borderColor={'gray.800'}
        px={'5rem'}
        py={'1.75rem'}>
        <Stack justify="space-between" direction="row" align="center">
          <HStack spacing={5}>
            <Logo boxSize={'1.65rem'} fill="brand.50" />
            <Text fontSize="sm" color="fg.subtle">
              Linear Orbit, Inc - San Francisco, CA
            </Text>
          </HStack>
          <HStack spacing={'3rem'}>
            <Link color={'white'} variant={'ghost'}>
              Twitter
            </Link>
            <Link color={'white'} variant={'ghost'}>
              Download
            </Link>
            <Link color={'white'} variant={'ghost'}>
              Privacy
            </Link>
            <Link color={'white'} variant={'ghost'}>
              Terms of Service
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
