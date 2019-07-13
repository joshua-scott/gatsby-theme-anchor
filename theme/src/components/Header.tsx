import React, { ReactNode } from 'react';
import ReactHeadroom from 'react-headroom';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Header as StyledHeader, Flex, Styled } from 'theme-ui';
import { Podcast } from '../types/Anchor';
import { PageTypes } from '../types/Pages';

type LayoutQuery = {
  podcast: Podcast;
};

type PageLinkProps = {
  children: ReactNode;
  current: PageTypes;
  route: PageTypes;
};

const PageLink = ({ children, current, route }: PageLinkProps) => (
  <Styled.li
    style={{
      color: current === route ? 'red' : 'white',
      display: 'inline-block',
      margin: '0 10px',
    }}
  >
    <Link
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}
      to={route}
    >
      {children}
    </Link>
  </Styled.li>
);

type Props = {
  currentPage: PageTypes;
};

const Header = ({ currentPage }: Props) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query LayoutQuery {
      podcast: anchorPodcast {
        title
      }
    }
  `);

  return (
    <ReactHeadroom>
      <StyledHeader>
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
            <Styled.h2>{data.podcast.title}</Styled.h2>
          </Link>

          <Styled.ul>
            <PageLink route="about" current={currentPage}>
              About
            </PageLink>
            <PageLink route="episodes" current={currentPage}>
              Episodes
            </PageLink>
            <PageLink route="news" current={currentPage}>
              News
            </PageLink>
          </Styled.ul>
        </Flex>
      </StyledHeader>
    </ReactHeadroom>
  );
};

export default Header;
