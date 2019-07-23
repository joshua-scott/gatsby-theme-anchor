import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import * as AnchorTypes from '../types/Anchor';

type Props = {
  title: string;
  content: string;
};

export const AboutTemplate = ({ title, content }: Props) => (
  <React.Fragment>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </React.Fragment>
);

type AboutQuery = {
  about: {
    childMarkdownRemark: {
      html: string;
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
          html
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
      <AboutTemplate
        title={about.childMarkdownRemark.frontmatter.title}
        content={about.childMarkdownRemark.html}
      />
    </Layout>
  );
};

export default About;
