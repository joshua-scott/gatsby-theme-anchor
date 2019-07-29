import React, { useContext, ReactNode } from 'react';
import { Flex, Text, Box } from 'rebass';
import { PageLink, SocialLink } from '../types/Link';
import Container from './Container';
import { AppContext } from './MockWrapper';
import LinkList from './LinkList';
import { useStaticQuery, graphql } from 'gatsby';
import { normalizeName } from '../utils/string';
import { detectPodcastPlatform } from '../utils/link';
import SocialIcon from './SocialIcon';
import styled from 'styled-components';
import Link from './Link';

export type FooterProps = {
  name: string;
  description: string;
  pages: PageLink[];
  podcastLinks?: string[];
  socialLinks?: string[];
};

const addPlatformName = (link: string) => ({
  path: link,
  name: normalizeName(detectPodcastPlatform(link)),
});

const addSocialIcon = (link: string) => ({
  path: link,
  name: <SocialIcon link={link} />,
});

const FooterContainer = styled(Box)`
  background-image: ${props => props.theme.gradients.bottom};
  color: ${props => props.theme.colors.textAlt};
`;

export const FooterTemplate = ({
  name,
  description,
  pages,
  podcastLinks = [],
  socialLinks = [],
}: FooterProps) => {
  return (
    <FooterContainer as="footer" p={3}>
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 4]}>
            <Text fontWeight="bold">{name}</Text>
            <Text my={2}>{description}</Text>
          </Box>

          <Box width={[1 / 3, 1 / 4]}>
            <Text fontWeight="bold">Pages</Text>
            <LinkList links={pages} direction="vertical" />
          </Box>

          <Box width={[1 / 3, 1 / 4]}>
            <Text fontWeight="bold">Podcast links</Text>
            <LinkList
              links={podcastLinks.map(addPlatformName)}
              direction="vertical"
            />
          </Box>

          <Box width={[1 / 3, 1 / 4]}>
            <Text fontWeight="bold">Social</Text>
            <LinkList links={socialLinks.map(addSocialIcon)} />
          </Box>
        </Flex>
        <Box
          as="hr"
          backgroundColor="background"
          my={3}
          css={`
            border: 0;
            height: 1px;
          `}
        />
        <Text textAlign="center">
          This site was develop using &nbsp;
          <Link path="https://github.com/EmaSuriano/gatsby-theme-anchor">
            <b>gatsby-theme-anchor</b>
          </Link>
          &nbsp; ❤
        </Text>
      </Container>
    </FooterContainer>
  );
};

const Footer = () => {
  const { podcast, pages, landing } = useStaticQuery(graphql`
    query FooterQuery {
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
      landing: file(name: { eq: "landing" }) {
        childMarkdownRemark {
          frontmatter {
            heading
            subheading
            cover
            podcastLinks
            socialLinks
          }
        }
      }
    }
  `);

  const footerPages = pages.nodes.map(({ path, context }) => ({
    path,
    name: context.name,
  }));

  const {
    heading,
    subheading,
    podcastLinks,
    socialLinks,
  } = landing.childMarkdownRemark.frontmatter;

  return (
    <FooterTemplate
      name={heading || podcast.title}
      pages={footerPages}
      description={subheading}
      podcastLinks={podcastLinks}
      socialLinks={socialLinks}
    />
  );
};

const SmartFooter = () => {
  const { mocked, mocks } = useContext(AppContext);

  return mocked ? <FooterTemplate {...mocks.footer} /> : <Footer />;
};

export default SmartFooter;
