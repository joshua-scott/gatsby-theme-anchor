import React, { useContext } from 'react';
import { Author as AuthorType } from '../types/About';
import { Heading, Box, Image, Text, Card, Flex } from 'rebass';
import styled, { ThemeContext } from 'styled-components';

type Props = AuthorType;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const Author = ({ name, description, picture }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Card
      m={3}
      p={4}
      bg="white"
      borderRadius={6}
      width={290}
      boxShadow={theme.shadows.large}
    >
      <Flex flexDirection="column">
        <Heading>{name}</Heading>
        <Text my={2} color="textSecondary">
          {description}
        </Text>
        <StyledImage src={picture} alt={name} m="auto" />
      </Flex>
    </Card>
  );
};

export default Author;
