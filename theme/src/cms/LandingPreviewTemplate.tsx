import React from 'react';
import { AboutContent } from '../templates/About';
import Layout from '../components/Layout';
import CSSInjector from '../components/CSSInjector';

const IndexPagePreview = ({ entry }) => {
  return (
    <CSSInjector>
      <Layout mocked>
        <AboutContent
          title={entry.getIn(['data', 'title'])}
          content={entry.getIn(['data', 'body'])}
        />
      </Layout>
    </CSSInjector>
  );
};

export default IndexPagePreview;
