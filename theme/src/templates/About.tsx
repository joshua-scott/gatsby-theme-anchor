import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { About as AboutType } from '../types/About';
import { Heading, Flex, Box } from 'rebass';
import Author from '../components/Author';
import MarkdownRenderer from '../components/MarkdownRenderer';

type Props = AboutType & {
  mocked?: boolean;
};

export const AboutTemplate = ({ content, mocked, authors = [] }: Props) => (
  <Layout mocked={mocked}>
    <Heading fontSize={[5, 6]}>Latest episodes</Heading>

    <MarkdownRenderer markdown={content} />

    <Heading fontSize={4} mt={4} mb={2}>
      Authors
    </Heading>
    <Flex flexWrap="wrap">
      {authors.map(author => (
        <Author {...author} key={author.name} />
      ))}
    </Flex>
  </Layout>
);

const useAboutQuery = () =>
  useStaticQuery(graphql`
    query AboutQuery {
      about: file(name: { eq: "about" }) {
        childMarkdownRemark {
          content: rawMarkdownBody
          data: frontmatter {
            authors {
              description
              name
              picture
            }
          }
        }
      }
    }
  `);

const About = () => {
  const { about } = useAboutQuery();
  const { content, data } = about.childMarkdownRemark;

  return <AboutTemplate authors={data.authors} content={content} />;
};

export default About;
