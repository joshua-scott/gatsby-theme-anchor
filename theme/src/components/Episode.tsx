import React, { useContext } from 'react';
import * as PodcastTypes from '../types/Podcast';
import AudioPlayer from './AudioPlayer';
import { Card, Text, Box, Flex } from 'rebass';
import styled, { ThemeContext } from 'styled-components';

type Props = PodcastTypes.Episode;

const StyledSummary = styled(Box)`
  height: 200px;
  overflow: auto;
`;

const Episode = ({ title, link, publishedDate, itunes, enclosure }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <Card
      width={1}
      p={4}
      my={5}
      bg="white"
      borderRadius={6}
      boxShadow={theme.shadows.large}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={5} lineHeight={2}>
          {title}
        </Text>
        <Text fontWeight="bold">{publishedDate}</Text>
      </Flex>
      <Box m={3}>
        <AudioPlayer
          url={enclosure.url}
          title={title}
          cover={itunes.image}
          link={link}
        />
      </Box>
      <StyledSummary dangerouslySetInnerHTML={{ __html: itunes.summary }} />
    </Card>
  );
};

export default Episode;
