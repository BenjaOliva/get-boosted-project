import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { WebRoutes } from './routes';
import theme from './theme/theme';

const router = createHashRouter(WebRoutes);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
