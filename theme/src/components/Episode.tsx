import React, { useContext } from 'react';
import * as PodcastTypes from '../types/Podcast';
import AudioPlayer from './AudioPlayer';
import { Card, Text, Box, Flex, Heading } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import moment from 'moment';

type Props = { large?: boolean } & PodcastTypes.Episode;

const StyledSummary = styled(Box)<{ longDescription: boolean }>`
  min-height: 200px;
  max-height: ${props => (props.longDescription ? '300' : '250')}px;
  overflow: auto;
`;

const numberToDuration = (seconds: number) =>
  moment.duration(seconds, 'seconds').humanize();

const EpisodeTitle = styled(Heading)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Episode = ({
  title,
  link,
  publishedDate,
  cover,
  url,
  content,
  duration,
  large,
}: Props) => {
  const theme = useContext(ThemeContext);

  const sideText = duration
    ? `${publishedDate} - ${numberToDuration(duration)}`
    : publishedDate;

  return (
    <Card
      m={3}
      px={4}
      py={3}
      bg="white"
      borderRadius={8}
      boxShadow={theme.shadows.large}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <EpisodeTitle fontSize={[3, 4]} lineHeight={2}>
          {title}
        </EpisodeTitle>

        {large && (
          <Text fontWeight="bold" color="textSecondary">
            {sideText}
          </Text>
        )}
      </Flex>
      <StyledSummary
        longDescription={large}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <Box my={3} px={large ? 5 : 0} width={1}>
        <AudioPlayer url={url} link={link} cover={cover} />
      </Box>
    </Card>
  );
};

export default Episode;
