import React from 'react';
import { LandingTemplate } from '../templates/Landing';
import CSSInjector from '../components/CSSInjector';

const LandingPreview = ({ entry }) => {
  console.log(entry.getIn(['data', 'cover']));
  return (
    <CSSInjector>
      <LandingTemplate
        mocked
        latestEpisodes={[]}
        podcast={{
          title: entry.getIn(['data', 'heading']),
          podcastLinks: entry.getIn(['data', 'podcastLinks']),
          description: entry.getIn(['data', 'subheading']),
          logo: entry.getIn(['data', 'logo']),
        }}
        cover={entry.getIn(['data', 'cover'])}
      />
    </CSSInjector>
  );
};

export default LandingPreview;
