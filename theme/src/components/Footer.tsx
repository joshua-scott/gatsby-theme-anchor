import React, { useContext, ReactNode } from 'react';
import { Flex, Text, Box, Link } from 'rebass';
import { PageLink, SocialLink } from '../types/Link';
import Container from './Container';
import { AppContext } from './MockWrapper';
import LinkList from './LinkList';
import { useStaticQuery, graphql } from 'gatsby';
import { normalizeName } from '../utils/string';
import { detectPodcastPlatform } from '../utils/link';
import SocialIcon from './SocialIcon';

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

export const FooterTemplate = ({
  name,
  description,
  pages,
  podcastLinks = [],
  socialLinks = [],
}: FooterProps) => {
  return (
    <Box as="footer" backgroundColor="secondary" p={3}>
      <Container>
        <Flex>
          <Box width={[1 / 4]}>
            <Text color="invertText" fontWeight="bold">
              {name}
            </Text>
            <Text color="invertText" my={3}>
              {description}
            </Text>
          </Box>

          <Box width={[1 / 4]}>
            <Text color="invertText" fontWeight="bold">
              Pages
            </Text>
            <LinkList links={pages} direction="vertical" />
          </Box>

          <Box width={[1 / 4]}>
            <Text color="invertText" fontWeight="bold">
              Podcast links
            </Text>
            <LinkList
              links={podcastLinks.map(addPlatformName)}
              direction="vertical"
            />
          </Box>

          <Box width={[1 / 4]}>
            <Text color="invertText" fontWeight="bold">
              Social
            </Text>
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
        <Text textAlign="center" color="invertText">
          This site was develop using
          <Link
            href="https://github.com/EmaSuriano/gatsby-theme-anchor"
            mx={2}
            color="invertText"
          >
            gatsby-theme-anchor
          </Link>
          ❤
        </Text>
      </Container>
    </Box>
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
