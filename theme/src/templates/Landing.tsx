import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Episode from '../components/Episode';
import { graphql, useStaticQuery } from 'gatsby';
import * as AnchorTypes from '../types/Anchor';

type Props = {
  latestEpisodes: AnchorTypes.Episode[];
  podcast: AnchorTypes.Podcast;
  mocked?: boolean;
};

export const LandingTemplate = ({ podcast, latestEpisodes, mocked }: Props) => (
  <Layout mocked={mocked} heroContent={<Banner {...podcast} />}>
    <h1>Latest episodes</h1>
    {latestEpisodes.map(episode => (
      <Episode key={episode.id} {...episode} />
    ))}
  </Layout>
);

const Landing = () => {
  const { podcast, latestEpisodes } = useStaticQuery(graphql`
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

  return (
    <LandingTemplate podcast={podcast} latestEpisodes={latestEpisodes.nodes} />
  );
};

export default Landing;
