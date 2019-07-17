import React from 'react';
import { useThemeUI } from 'theme-ui';
import AudioCard from 'audiocard';

type Props = {
  url: string;
  title: string;
  cover?: string;
  link?: string;
};

const AudioPlayer = ({ url, title, cover, link }: Props) => {
  const { theme } = useThemeUI();

  return (
    <AudioCard
      source={url}
      title={title}
      skipBackSeconds={10}
      skipForwardSeconds={30}
      background={theme.colors.background}
      progressBarBackground={theme.colors.primary}
      progressBarCompleteBackground={theme.colors.secondary}
      color={theme.colors.text}
      art={cover}
      link={link}
      linkText="Link to Anchor"
    />
  );
};

export default AudioPlayer;
