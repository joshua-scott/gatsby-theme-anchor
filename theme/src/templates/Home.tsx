import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Styled } from 'theme-ui';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import * as AnchorTypes from '../types/Anchor';

const useHomeQuery = () => {
  type HomeQuery = {
    latestEpisodes: {
      nodes: AnchorTypes.Episode[];
    };
    podcast: AnchorTypes.Podcast;
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
          publishedDate: isoDate(formatString: "MM/DD/YYYY")
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
    <Layout heroContent={<Banner {...podcast} />}>
      <Styled.h1>Latest episodes</Styled.h1>
      {latestEpisodes.nodes.map(episode => (
        <Episode key={episode.id} {...episode} />
      ))}
    </Layout>
  );
};

export default Home;
