import React from 'react';
import { HeaderProps } from '../components/Header';
import { FooterProps } from '../components/Footer';

export const headerPropsMock: HeaderProps = {
  title: 'CMS Preview',
  pages: [
    { name: 'Page 1', path: '/page-1' },
    { name: 'Page 2', path: '/page-2' },
  ],
};

export const footerPropsMock: FooterProps = {
  logo: <div style={{ background: 'red', width: '20px', height: '20px' }} />,
  description: 'This is the best podcast ever!',
  pages: [{ path: '/', name: 'home' }, { path: '/about', name: 'about' }],
  usefulLinks: [
    { path: 'https://anchor.fm/the-es-podcast', name: 'Anchor' },
    {
      path: 'https://github.com/EmaSuriano/gatsby-theme-anchor',
      name: 'Github',
    },
  ],
  socialLinks: [
    { icon: 'facebook', name: 'Facebook', path: 'facebook.com' },
    { icon: 'twitter', name: 'twitter', path: 'twitter.com' },
  ],
  copyright: 'This page was develop using gatsby-theme-anchor ❤',
};
