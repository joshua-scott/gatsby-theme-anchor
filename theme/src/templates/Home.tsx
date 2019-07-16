import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
// import EpisodeCard from '../components/EpisodeCard';
import { graphql, useStaticQuery } from 'gatsby';
import { Episode, Podcast } from '../types/Anchor';

type HomeQuery = {
  latestEpisodes: Episode[];
  podcast: Podcast;
};

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

  const { podcast, latestEpisodes } = data;
  console.log(latestEpisodes);
  return (
    <Layout>
      <Banner {...podcast} />
      <Banner {...podcast} />
      <Banner {...podcast} />
      <Banner {...podcast} />
      <Banner {...podcast} />
      <Banner {...podcast} />
      {/* <div>
        <Styled.h1>Latest episodes</Styled.h1>
        {latestEpisodes.nodes.map(({ id, ...rest }) => (
          <Podcast key={id} {...rest} />
        ))}
      </div> */}
    </Layout>
  );
};

export default Home;
