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
      m={3}
      p={4}
      bg="white"
      borderRadius={6}
      boxShadow={theme.shadows.large}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={[3, 4]} lineHeight={2}>
          {title}
        </Text>
        <Text fontWeight="bold">{publishedDate}</Text>
      </Flex>
      <StyledSummary dangerouslySetInnerHTML={{ __html: itunes.summary }} />
      <Box my={3}>
        <AudioPlayer url={enclosure.url} link={link} />
      </Box>
    </Card>
  );
};

export default Episode;
