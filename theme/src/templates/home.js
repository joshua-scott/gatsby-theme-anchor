import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      latestEpisodes: allAnchorEpisode(limit: 3) {
        nodes {
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
  return (
    <Layout>
      <Styled.h1>{podcast.title}</Styled.h1>
      <Styled.h2>{podcast.description}</Styled.h2>
    </Layout>
  )
}

export default Home
