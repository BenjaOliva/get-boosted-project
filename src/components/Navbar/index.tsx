/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Skeleton,
  useColorModeValue,
  chakra,
  HStack,
  VStack,
  CloseButton,
} from '@chakra-ui/react';
import { Logo } from '../../resources/Logos';

export const Navbar = () => {
  const bg = '#16151D';
  const mobileNav = useDisclosure();
  return (
    <Box position={'fixed'} top="0" zIndex={'999'} width={'100%'}>
      <chakra.header bg={bg} w="full" px={'7.7rem'} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Linear Home Page"
              display="flex"
              alignItems="center">
              <Logo fill={'brand.50'} boxSize={'1.5rem'} />
            </chakra.a>
            <chakra.h1 fontSize="md" fontWeight="medium" ml="2" color="white">
              Linear
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}>
              <Button color={'white'} variant="ghost">
                Twitter
              </Button>
              <Button color={'white'} variant="ghost">
                Changelog
              </Button>
            </HStack>
            <Button color={'#5E6AD2'} variant={'ghost'} size="sm">
              Sign in
            </Button>
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}>
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm">
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
};
