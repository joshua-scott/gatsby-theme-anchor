import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Box, Heading } from 'rebass';
import {
  Podcast as PodcastType,
  Episode as EpisodeType,
} from '../types/Podcast';
import ErrorMessage from '../components/ErrorMessage';
import { parseToEpisode } from '../utils/parser';

type Props = {
  latestEpisodes: EpisodeType[];
  podcast: PodcastType;
  mocked?: boolean;
  cover?: string;
};

const notFoundImage = {
  src: 'img/not-found.svg',
  alt: 'Not found',
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
      <ErrorMessage image={notFoundImage}>
        Oops ... It seems that you didn't record any episodes yet 😕
      </ErrorMessage>
    )}
  </Layout>
);

const Landing = () => {
  const { anchorPodcast, allAnchorEpisode, landing } = useStaticQuery(graphql`
    query LandingQuery {
      allAnchorEpisode(limit: 4, sort: { order: ASC, fields: pubDate }) {
        nodes {
          id
          title
          content
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

  const episodes: EpisodeType[] = allAnchorEpisode.nodes.map(parseToEpisode);

  return (
    <LandingTemplate
      podcast={podcast}
      latestEpisodes={episodes}
      cover={cover}
    />
  );
};

export default Landing;
