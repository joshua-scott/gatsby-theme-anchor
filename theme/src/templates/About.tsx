import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { About as AboutType } from '../types/Cms';

type Props = AboutType & {
  mocked?: boolean;
};

export const AboutTemplate = ({ title, content, mocked }: Props) => (
  <Layout mocked={mocked}>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
  </Layout>
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
    <AboutTemplate
      title={about.childMarkdownRemark.frontmatter.title}
      content={about.childMarkdownRemark.rawMarkdownBody}
    />
  );
};

export default About;
