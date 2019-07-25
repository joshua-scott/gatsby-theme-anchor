import React from 'react';
import ReactHeadroom from 'react-headroom';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Header as StyledHeader, Flex, Styled, useThemeUI } from 'theme-ui';
import { Podcast } from '../types/Anchor';
import { SitePage } from '../types/Gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

type PageRoute = {
  path: string;
  context: {
    name: string;
  };
};

type HeaderProps = {
  title: string;
  transparentHeader: boolean;
  pages: PageRoute[];
  currentPath?: string;
};

const HomeLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

export const HeaderTemplate = ({
  title,
  transparentHeader,
  pages,
  currentPath,
}: HeaderProps) => (
  <ReactHeadroom>
    <StyledHeader
      {...transparentHeader && {
        style: {
          background: 'transparent',
        },
      }}
    >
      <Flex
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <HomeLink to="/">
          <Styled.h2>{title}</Styled.h2>
        </HomeLink>

        <Styled.ul>
          {pages.map(({ path, context }) => (
            <PageLink
              route={path}
              name={context.name}
              selected={path === currentPath}
              key={path}
            />
          ))}
        </Styled.ul>
      </Flex>
    </StyledHeader>
  </ReactHeadroom>
);

type LayoutQuery = {
  podcast: Podcast;
  pages: {
    nodes: SitePage[];
  };
};

type PageLinkProps = {
  name: string;
  selected: boolean;
  route: string;
};

const PageLink = ({ name, selected, route }: PageLinkProps) => {
  const { theme } = useThemeUI();
  return (
    <Styled.li
      style={{
        color: selected ? theme.colors.secondary : theme.colors.altText,
        display: 'inline-block',
        margin: '0 10px',
      }}
    >
      <Styled.a
        as={Link}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
        to={route}
      >
        {name}
      </Styled.a>
    </Styled.li>
  );
};

type Props = {
  transparentHeader?: boolean;
};

const Header = ({ transparentHeader }: Props) => {
  const { podcast, pages } = useStaticQuery<LayoutQuery>(graphql`
    query HeaderQuery {
      podcast: anchorPodcast {
        title
      }
      pages: allSitePage(filter: { context: { name: { ne: null } } }) {
        nodes {
          id
          path
          context {
            name
          }
        }
      }
    }
  `);

  return (
    <Location>
      {({ location }) => (
        <HeaderTemplate
          transparentHeader={transparentHeader}
          currentPath={location.pathname}
          pages={pages.nodes}
          title={podcast.title}
        />
      )}
    </Location>
  );
};

export default Header;
