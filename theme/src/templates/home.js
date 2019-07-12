import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Podcast from "../components/Podcast"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const { podcast, latestEpisodes } = data
  console.log(latestEpisodes)
  return (
    <Layout>
      <Banner {...podcast} />
      <div>
        <Styled.h1>Latest episodes</Styled.h1>
        {latestEpisodes.nodes.map(({ id, ...rest }) => (
          <Podcast key={id} {...rest} />
        ))}
      </div>
    </Layout>
  )
}

export default Home
