import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

type Props = {
  title: string;
  content: string;
};

export const AboutContent = ({ title, content }: Props) => (
  <React.Fragment>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
  </React.Fragment>
);

type AboutQuery = {
  about: {
    childMarkdownRemark: {
      rawMarkdownBody: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

const useAboutQuery = <T extends {}>() =>
  useStaticQuery<T>(graphql`
    query AboutQuery {
      about: file(name: { eq: "about" }) {
        childMarkdownRemark {
          rawMarkdownBody
          frontmatter {
            title
          }
        }
      }
    }
  `);

const About = () => {
  const { about } = useAboutQuery<AboutQuery>();

  return (
    <Layout>
      <AboutContent
        title={about.childMarkdownRemark.frontmatter.title}
        content={about.childMarkdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default About;
