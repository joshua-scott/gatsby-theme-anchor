import React from 'react';
import { LandingTemplate } from '../templates/Landing';
import CSSInjector from '../components/CSSInjector';

const LandingPreview = ({ entry }) => {
  return (
    <CSSInjector>
      <LandingTemplate
        mocked
        latestEpisodes={[]}
        podcast={{
          title: 'josee',
          link: 'https://www.google.com/',
          description: 'asdasda',
          image: {
            url:
              'https://www.google.de/url?sa=i&source=images&cd=&ved=2ahUKEwiDw-6C99LjAhUCyKQKHUGpAgUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thesun.co.uk%2Fnews%2F9561614%2Fchihuahua-swallowed-whole-seagull-expert%2F&psig=AOvVaw0TnULVhKlv7AxEMWkG17rF&ust=1564242354604761',
            title: 'Dogggy',
          },
        }}
      />
    </CSSInjector>
  );
};

export default LandingPreview;
