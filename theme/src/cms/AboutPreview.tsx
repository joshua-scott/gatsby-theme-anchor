import React from 'react';
import { AboutTemplate } from '../templates/About';
import CSSInjector from '../components/CSSInjector';

const AboutPreview = ({ entry }) => {
  return (
    <CSSInjector>
      <AboutTemplate
        mocked
        title={entry.getIn(['data', 'title'])}
        content={entry.getIn(['data', 'body'])}
      />
    </CSSInjector>
  );
};

export default AboutPreview;
