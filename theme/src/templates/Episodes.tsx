import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Episode as EpisodeType } from '../types/Podcast';
import { Flex } from 'rebass';
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
      <h1>Episodes</h1>
      {episodes.length > 0 ? (
        <Flex flexWrap="wrap">
          {episodes.map(episode => (
            <Episode large {...episode} key={episode.id} />
          ))}
        </Flex>
      ) : (
        <ErrorMessage image={notFoundImage}>
          Oops ... It seems that you don't have podcasts yet 😕
        </ErrorMessage>
      )}
    </Layout>
  );
};

const Episodes = () => {
  const { allAnchorEpisode } = useStaticQuery(graphql`
    query EpisodesQuery {
      allAnchorEpisode {
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
