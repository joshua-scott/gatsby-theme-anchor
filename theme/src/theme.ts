const theme = {
  breakpoints: ['40em', '50em', '55em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    text: '#292f36',
    invertText: 'white',

    background: '#f2f2f4',
    backgroundDark: '#faf3ff',

    primary: '#7c37ad',
    primaryLight: '#ae66df',
    primaryDark: '#4b007d',

    secondary: '#ff4081',
    secondaryLight: '#ff79b0',
    secondaryDark: '#c60055',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 16px rgba(0, 0, 0, .125)',
  },
};

export default theme;
