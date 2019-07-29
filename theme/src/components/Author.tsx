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
      p={3}
      bg="white"
      borderRadius={8}
      width={400}
      boxShadow={theme.shadows.large}
    >
      <Flex flexDirection="row">
        <Box width={1 / 2} pr={3}>
          <Heading>{name}</Heading>
          <Text my={2} color="textSecondary">
            {description}
          </Text>
        </Box>
        <StyledImage width={1 / 2} src={picture} alt={name} m="auto" />
      </Flex>
    </Card>
  );
};

export default Author;
