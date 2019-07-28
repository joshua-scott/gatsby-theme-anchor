import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import { Text, Flex } from 'rebass';
import {
  Podcast as PodcastType,
  Episode as EpisodeType,
} from '../types/Podcast';

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
    <Text fontSize={[5, 6]}>Latest episodes</Text>
    {latestEpisodes.length > 0 ? (
      <Flex flexWrap="wrap">
        {latestEpisodes.map(episode => (
          <Episode key={episode.id} {...episode} />
        ))}
      </Flex>
    ) : (
      <Text fontSize={[5, 6]}>Oops there is nothing here ...</Text>
    )}
  </Layout>
);

const Landing = () => {
  const { anchorPodcast, latestEpisodes, landing } = useStaticQuery(graphql`
    query LandingQuery {
      latestEpisodes: allAnchorEpisode(limit: 3) {
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
      latestEpisodes={latestEpisodes.nodes
        .concat(latestEpisodes.nodes)
        .concat(latestEpisodes.nodes)}
      cover={cover}
    />
  );
};

export default Landing;
