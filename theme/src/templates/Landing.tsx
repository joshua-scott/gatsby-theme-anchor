import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import { Text, Flex, Box, Image, Heading } from 'rebass';
import {
  Podcast as PodcastType,
  Episode as EpisodeType,
} from '../types/Podcast';
import NotFound from '../components/NotFound';

type Props = {
  latestEpisodes: EpisodeType[];
  podcast: PodcastType;
  mocked?: boolean;
  cover?: string;
};

export const LandingTemplate = ({
  podcast,
  latestEpisodes,
  mocked,
  cover,
}: Props) => (
  <Layout mocked={mocked} hero={<Hero podcast={podcast} cover={cover} />}>
    <Heading fontSize={[5, 6]}>Latest episodes</Heading>
    {latestEpisodes.length > 0 ? (
      <Flex flexWrap="wrap">
        {latestEpisodes.map(episode => (
          <Box width={[1, 1, 1 / 2]} key={episode.id}>
            <Episode {...episode} />
          </Box>
        ))}
      </Flex>
    ) : (
      <NotFound reason="Oops ... It seems that you don't have podcasts yet 😕" />
    )}
  </Layout>
);

const Landing = () => {
  const { anchorPodcast, latestEpisodes, landing } = useStaticQuery(graphql`
    query LandingQuery {
      latestEpisodes: allAnchorEpisode(limit: 4) {
        nodes {
          id
          title
          link
          content
          itunes {
            image
            summary
            duration
            explicit
          }
          contentSnippet
          publishedDate: isoDate(formatString: "DD MMM YYYY")
          enclosure {
            url
            type
            length
          }
        }
      }
      anchorPodcast {
        title
        link
        description
        image {
          url
        }
      }
      landing: file(name: { eq: "landing" }) {
        childMarkdownRemark {
          frontmatter {
            heading
            subheading
            logo
            cover
            podcastLinks
          }
        }
      }
    }
  `);

  const {
    heading,
    subheading,
    logo,
    podcastLinks,
    cover,
  } = landing.childMarkdownRemark.frontmatter;

  const podcast: PodcastType = {
    title: heading || anchorPodcast.title,
    description: subheading,
    logo: logo || anchorPodcast.image.url,
    podcastLinks: podcastLinks || [anchorPodcast.link],
  };

  return (
    <LandingTemplate
      podcast={podcast}
      latestEpisodes={latestEpisodes.nodes}
      cover={cover}
    />
  );
};

export default Landing;
