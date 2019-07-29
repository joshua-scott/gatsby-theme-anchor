import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Episode as EpisodeType } from '../types/Podcast';
import { Flex, Box } from 'rebass';
import Episode from '../components/Episode';
import { parseToEpisode } from '../utils/parser';

type Props = {
  episodes: EpisodeType[];
};

const EpisodesTemplate = ({ episodes }: Props) => {
  return (
    <Layout>
      <h1>Episodes</h1>
      <Flex flexWrap="wrap">
        {episodes.map(episode => (
          <Episode large {...episode} key={episode.id} />
        ))}
      </Flex>
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
