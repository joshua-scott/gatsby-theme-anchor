import React from 'react';
import ReactHeadroom from 'react-headroom';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Header as StyledHeader, Flex, Styled } from 'theme-ui';
import { Podcast } from '../types/Anchor';
import { SitePage } from '../types/Gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { PageLink as PageLinkType } from '../types/Link';
import PageLink from './PageLink';

export type HeaderProps = {
  title: string;
  pages: PageLinkType[];
  transparentHeader?: boolean;
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
          {pages.map(({ path, name }) => (
            <PageLink
              route={path}
              name={name}
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
          path
          context {
            name
          }
        }
      }
    }
  `);

  const headerPages = pages.nodes.map(({ path, context }) => ({
    path,
    name: context.name,
  }));

  return (
    <Location>
      {({ location }) => (
        <HeaderTemplate
          transparentHeader={transparentHeader}
          currentPath={location.pathname}
          pages={headerPages}
          title={podcast.title}
        />
      )}
    </Location>
  );
};

export default Header;
