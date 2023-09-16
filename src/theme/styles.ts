export const globalStyles = {
  colors: {
    primary: {
      main: '#f7d42d',
      50: '#f7d42d',
      100: '#f7d42d',
      200: '#f7d42d',
      300: '#f7d42d',
      400: '#f7d42d',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
    brand: {
      main: '#5E6AD2',
      50: '#5E6AD2',
      100: '#ccae21',
      200: '#f7d42d',
    },
    gray: {
      700: '#1f2733',
    },
    backgroundColor: {
      50: '#313149',
      100: '#27273A',
    },
  },
  styles: {
    global: props => ({
      body: {
        overscrollBehaviorY: 'none',
        backgroundColor: '#16151D',
      },
      html: {
        overscrollBehaviorY: 'none',
      },
      iframe: {
        colorScheme: 'normal',
      },
    }),
  },
};
