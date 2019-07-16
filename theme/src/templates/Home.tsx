import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Styled } from 'theme-ui';
import EpisodeCard from '../components/EpisodeCard';
import { graphql, useStaticQuery } from 'gatsby';
import { Episode, Podcast } from '../types/Anchor';

const useHomeQuery = () => {
  type HomeQuery = {
    latestEpisodes: {
      nodes: Episode[];
    };
    podcast: Podcast;
  };

  return useStaticQuery<HomeQuery>(graphql`
    query HomeQuery {
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
          isoDate(formatString: "MMDDYYYY")
          enclosure {
            url
            type
            length
          }
        }
      }
      podcast: anchorPodcast {
        title
        link
        description
        image {
          url
          title
        }
      }
    }
  `);
};

const Home = () => {
  const { podcast, latestEpisodes } = useHomeQuery();

  return (
    <Layout>
      <Banner {...podcast} />
      <div>
        <Styled.h1>Latest episodes</Styled.h1>
        {latestEpisodes.nodes.map(episode => (
          <EpisodeCard key={episode.id} {...episode} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
