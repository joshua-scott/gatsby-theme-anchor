import React from 'react';
import { AboutContent } from '../templates/About';
import { LayoutMocked } from '../components/Layout';
import CSSInjector from '../components/CSSInjector';

const IndexPagePreview = ({ entry }) => {
  return (
    <CSSInjector>
      <LayoutMocked>
        <AboutContent
          title={entry.getIn(['data', 'title'])}
          content={entry.getIn(['data', 'body'])}
        />
      </LayoutMocked>
    </CSSInjector>
  );
};

export default IndexPagePreview;
