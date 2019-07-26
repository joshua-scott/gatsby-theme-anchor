import React from 'react';
import { Link } from 'gatsby';
import { Flex } from 'rebass';
import { PageLink, SocialLink } from '../types/Link';
import { footer } from '../mocks/Components';
import styled from 'styled-components';

export type FooterProps = {
  logo: React.ReactNode;
  description: string;
  pages: PageLink[];
  usefulLinks: PageLink[];
  socialLinks: SocialLink[];
  copyright: string;
};

const Container = styled.div`
  padding: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  max-width: 650px;
  margin: auto;
`;

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.secondary};
`;

export const FooterTemplate = ({
  logo,
  description,
  pages,
  usefulLinks,
  socialLinks,
  copyright,
}: FooterProps) => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <div style={{ flex: '1 1 0' }}>
            {logo}
            <div>{description}</div>
          </div>

          <div style={{ flex: '1 1 0' }}>
            <h4>Pages</h4>
            <ul>
              {pages.map(({ path, name }) => (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1 1 0' }}>
            <h4>Useful Link</h4>
            <ul>
              {usefulLinks.map(({ path, name }) => (
                <li key={path}>
                  <a href={path}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1 1 0' }}>
            <h4>Social</h4>
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
  return <FooterTemplate {...footer} />;
};

export default Footer;
