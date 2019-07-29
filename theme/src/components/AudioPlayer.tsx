import React from 'react';
import AudioCard from 'audiocard';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

type Props = {
  url: string;
  title?: string;
  cover?: string;
  link?: string;
};

const StyledAudioCard = styled(AudioCard)`
  img {
    width: 100px;
  }
`;

const AudioPlayer = ({ url, title, cover, link }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledAudioCard
      source={url}
      title={title}
      skipBackSeconds={10}
      skipForwardSeconds={30}
      art={cover}
      link={link}
      color={theme.colors.text}
      progressBarBackground={theme.colors.primaryLight}
      progressBarCompleteBackground={theme.colors.accent}
      linkText="Link to Anchor"
    />
  );
};

export default AudioPlayer;
