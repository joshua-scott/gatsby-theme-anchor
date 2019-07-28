import React from 'react';
import { Styled } from 'theme-ui';
import * as PodcastTypes from '../types/Podcast';
import AudioPlayer from './AudioPlayer';

type Props = PodcastTypes.Episode;

const Episode = ({ title, link, publishedDate, itunes, enclosure }: Props) => {
  console.log(itunes);
  return (
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Styled.b>Published date: {publishedDate}</Styled.b>
      <div dangerouslySetInnerHTML={{ __html: itunes.summary }} />
      <AudioPlayer
        url={enclosure.url}
        title={title}
        cover={itunes.image}
        link={link}
      />
    </div>
  );
};

export default Episode;
