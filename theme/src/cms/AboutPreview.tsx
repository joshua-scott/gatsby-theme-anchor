import React from 'react';
import { AboutTemplate } from '../templates/About';
import CSSInjector from '../components/CSSInjector';

const AboutPreview = ({ entry }) => {
  const authors = entry.getIn(['data', 'authors']).map(auth => ({
    name: auth.get('name'),
    description: auth.get('description'),
    picture: auth.get('picture'),
  }));
  return (
    <CSSInjector>
      <AboutTemplate
        mocked
        content={entry.getIn(['data', 'body'])}
        authors={authors}
      />
    </CSSInjector>
  );
};

export default AboutPreview;
