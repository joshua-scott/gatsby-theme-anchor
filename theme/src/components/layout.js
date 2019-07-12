import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer,
} from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

const globalStyles = css`
  body {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global styles={globalStyles} />
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <span>Is this footer really goes down?</span>
      </Footer>
    </StyledLayout>
  )
}

export default Layout
