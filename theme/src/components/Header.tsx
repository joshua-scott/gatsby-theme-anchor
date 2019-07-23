import React from 'react';
import ReactHeadroom from 'react-headroom';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Header as StyledHeader, Flex, Styled, useThemeUI } from 'theme-ui';
import { Podcast } from '../types/Anchor';
import { SitePage } from '../types/Gatsby';
import { Location } from '@reach/router';

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
          <Link
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
            to="/"
          >
            <Styled.h2>{podcast.title}</Styled.h2>
          </Link>

          <Styled.ul>
            <Location>
              {({ location }) => {
                const currentPage = location.pathname;
                return pages.nodes.map(page => (
                  <PageLink
                    route={page.path}
                    name={page.context.name}
                    selected={page.path === currentPage}
                    key={page.id}
                  />
                ));
              }}
            </Location>
          </Styled.ul>
        </Flex>
      </StyledHeader>
    </ReactHeadroom>
  );
};

export default Header;
