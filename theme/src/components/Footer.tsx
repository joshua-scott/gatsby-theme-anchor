import React from 'react';
import { Link } from 'gatsby';
import { Footer as StyledFooter, Container, Flex, Box, Styled } from 'theme-ui';
import { PageLink, SocialLink } from '../types/Link';
import { footerPropsMock } from '../mocks/Components';

export type FooterProps = {
  logo: React.ReactNode;
  description: string;
  pages: PageLink[];
  usefulLinks: PageLink[];
  socialLinks: SocialLink[];
  copyright: string;
};

export const FooterTemplate = ({
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
          <div style={{ flex: '1 1 0' }}>
            {logo}
            <div>{description}</div>
          </div>

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
  return <FooterTemplate {...footerPropsMock} />;
};

export default Footer;
