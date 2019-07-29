import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Episode as EpisodeType } from '../types/Podcast';
import { Flex, Heading } from 'rebass';
import Episode from '../components/Episode';
import ErrorMessage from '../components/ErrorMessage';
import { parseToEpisode } from '../utils/parser';

type Props = {
  episodes: EpisodeType[];
};

const notFoundImage = {
  src: 'img/not-found.svg',
  alt: 'Not found',
};

const EpisodesTemplate = ({ episodes = [] }: Props) => {
  return (
    <Layout>
      <Heading fontSize={[5, 6]}>Episodes</Heading>
      {episodes.length > 0 ? (
        <Flex flexWrap="wrap">
          {episodes.map(episode => (
            <Episode large {...episode} key={episode.id} />
          ))}
        </Flex>
      ) : (
        <ErrorMessage image={notFoundImage}>
          Oops ... It seems that you didn't record any episodes yet 😕
        </ErrorMessage>
      )}
    </Layout>
  );
};

const Episodes = () => {
  const { allAnchorEpisode } = useStaticQuery(graphql`
    query EpisodesQuery {
      allAnchorEpisode(sort: { order: ASC, fields: pubDate }) {
        nodes {
          id
          title
          link
          content
          itunes {
            image
            duration
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
    }
  `);

  const episodes: EpisodeType[] = allAnchorEpisode.nodes.map(parseToEpisode);
  return <EpisodesTemplate episodes={episodes} />;
};

export default Episodes;
