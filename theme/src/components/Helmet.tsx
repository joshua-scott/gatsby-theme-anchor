import React, { useContext } from 'react';
import ReactHelmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeContext } from 'styled-components';
import { AppContext } from './MockWrapper';

type Props = {
  title: string;
  description: string;
};

const HelmetTemplate = ({ title, description }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <ReactHelmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="theme-color" content={theme.colors.primary} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />

      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </ReactHelmet>
  );
};

const Helmet = () => {
  const { podcast, landing } = useStaticQuery(graphql`
    query HelmetQuery {
      podcast: anchorPodcast {
        title
      }
      landing: file(name: { eq: "landing" }) {
        childMarkdownRemark {
          frontmatter {
            heading
            subheading
          }
        }
      }
    }
  `);

  const { heading, subheading } = landing.childMarkdownRemark.frontmatter;

  return (
    <HelmetTemplate title={heading || podcast.title} description={subheading} />
  );
};

const SmartHelmet = () => {
  const { mocked, mocks } = useContext(AppContext);

  return mocked ? <HelmetTemplate {...mocks.helmet} /> : <Helmet />;
};

export default SmartHelmet;
