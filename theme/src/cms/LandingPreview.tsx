import React from 'react';
import { LandingTemplate } from '../templates/Landing';
import CSSInjector from '../components/CSSInjector';

const LOGO_PLACEHOLDER = 'https://dummyimage.com/300/fff/09f.png';

const LandingPreview = ({ entry }) => {
  console.log(entry.getIn(['data', 'logo']));
  return (
    <CSSInjector>
      <LandingTemplate
        mocked
        latestEpisodes={[]}
        podcast={{
          title: entry.getIn(['data', 'heading']),
          podcastLinks: entry.getIn(['data', 'podcastLinks']),
          description: entry.getIn(['data', 'subheading']),
          logo: entry.getIn(['data', 'logo']) || LOGO_PLACEHOLDER,
        }}
        cover={entry.getIn(['data', 'cover'])}
      />
    </CSSInjector>
  );
};

export default LandingPreview;
