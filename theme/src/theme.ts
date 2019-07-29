// Palette generated with https://www.materialpalette.com/purple/pink
const colors = {
  primary: '#9C27B0',
  primaryDark: '#7B1FA2',
  primaryLight: '#E1BEE7',
  accent: '#FF4081',
  text: '#4B4453',
  textSecondary: '#757575',
  textAlt: '#FFF',
  background: '#FFF',
};

const theme = {
  breakpoints: ['40em', '50em', '55em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 2px 8px rgba(0, 0, 0, .125)',
  },
  gradients: {
    top: `linear-gradient(${colors.primaryDark}, ${colors.primary})`,
    bottom: `linear-gradient(${colors.primary}, ${colors.primaryDark})`,
  },
};

export default theme;
