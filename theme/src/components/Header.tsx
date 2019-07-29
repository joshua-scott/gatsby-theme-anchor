import React, { useContext } from 'react';
import ReactHeadroom from 'react-headroom';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Heading, Box } from 'rebass';
import { Podcast } from '../types/Podcast';
import { SitePage } from '../types/Gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { PageLink as PageLinkType } from '../types/Link';
import LinkList from './LinkList';
import Link from './Link';
import { AppContext } from './MockWrapper';

export type HeaderProps = {
  title: string;
  pages: PageLinkType[];
  transparentHeader?: boolean;
  currentPath?: string;
};

const HeaderContainer = styled(ReactHeadroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }
  background: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.primaryDark};
`;

const MenuItem = styled.span<{ selected: boolean }>`
  ${props =>
    props.selected && `border-bottom: 5px solid ${props.theme.colors.accent}`};
  margin: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[1]}px;
`;

const buildNavBar = (pages: PageLinkType[], currentPath: string) =>
  pages.map(({ path, name }) => ({
    path,
    name: <MenuItem selected={currentPath === path}>{name}</MenuItem>,
  }));

export const HeaderTemplate = ({
  title,
  transparentHeader,
  pages,
  currentPath,
}: HeaderProps) => (
  <HeaderContainer transparent={transparentHeader}>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={3}
      color="textAlt"
    >
      <Link path="/">
        <Heading>{title}</Heading>
      </Link>

      <LinkList links={buildNavBar(pages, currentPath)} />
    </Flex>
  </HeaderContainer>
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

const SmartHeader = (props: Props) => {
  const { mocked, mocks } = useContext(AppContext);

  return mocked ? (
    <HeaderTemplate {...mocks.header} {...props} />
  ) : (
    <Header {...props} />
  );
};

export default SmartHeader;
