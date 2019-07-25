import React from 'react';
import { Link } from 'gatsby';
import { Footer as StyledFooter, Container, Flex, Box, Styled } from 'theme-ui';

type PageLink = {
  path: string;
  name: string;
};

type SocialLink = PageLink & {
  icon: string;
};

type FooterProps = {
  logo: React.ReactNode;
  description: string;
  pages: PageLink[];
  usefulLinks: PageLink[];
  socialLinks: SocialLink[];
  copyright: string;
};

const FooterTemplate = ({
  logo,
  description,
  pages,
  usefulLinks,
  socialLinks,
  copyright,
}: FooterProps) => {
  return (
    <StyledFooter style={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <Flex>
          <div style={{ flex: '1 1 0' }}>{logo}</div>

          <div style={{ flex: '1 1 0' }}>
            <Styled.h4>Pages</Styled.h4>
            <ul>
              {pages.map(({ path, name }) => (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1 1 0' }}>
            <Styled.h4>Useful Link</Styled.h4>
            <ul>
              {usefulLinks.map(({ path, name }) => (
                <li key={path}>
                  <a href={path}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1 1 0' }}>
            <Styled.h4>Social</Styled.h4>
            <ul>
              {socialLinks.map(({ icon, path, name }) => (
                <li key={path}>
                  <a href={path}>
                    {name} {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Flex>
        <hr />
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>{copyright}</p>
      </Container>
    </StyledFooter>
  );
};

const Footer = () => {
  const data = {
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

  return <FooterTemplate {...data} />;
};

export default Footer;
