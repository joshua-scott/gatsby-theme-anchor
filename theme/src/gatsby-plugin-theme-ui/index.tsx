import { base } from '@theme-ui/presets';

export default {
  colors: {
    text: '#232129',
    background: '#fff',
    primary: '#639',
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: '1.45',
    heading: '1.1',
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'default',
      fontSize: 1,
      lineHeight: 'text',
    },
    Header: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: 0,
    },
    Main: {
      margin: '0 auto',
      maxWidth: 'container',
      width: '90vw',
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: 'text',
      fontSize: 5,
      lineHeight: 'heading',
    },
  },
};
