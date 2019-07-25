import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Styled } from 'theme-ui';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import * as AnchorTypes from '../types/Anchor';

type HomeQuery = {
  latestEpisodes: {
    nodes: AnchorTypes.Episode[];
  };
  podcast: AnchorTypes.Podcast;
};

export const HomeTemplate = ({ podcast, latestEpisodes }: HomeQuery) => (
  <Layout heroContent={<Banner {...podcast} />}>
    <Styled.h1>Latest episodes</Styled.h1>
    {latestEpisodes.nodes.map(episode => (
      <Episode key={episode.id} {...episode} />
    ))}
  </Layout>
);

const Home = () => {
  const data = useStaticQuery<HomeQuery>(graphql`
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

  return <HomeTemplate {...data} />;
};

export default Home;
