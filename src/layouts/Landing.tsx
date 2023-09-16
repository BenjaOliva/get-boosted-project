/* eslint-disable react-hooks/exhaustive-deps */
import { Box, chakra, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

function LandingLayout() {
  return (
    <Box position="relative">
      <Navbar />
      <Box>
        <Outlet />
      </Box>
      <chakra.footer>
        <Footer />
      </chakra.footer>
    </Box>
  );
}

export default LandingLayout;
