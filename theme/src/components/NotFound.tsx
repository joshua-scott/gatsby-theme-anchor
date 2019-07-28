import React from 'react';
import { Flex, Text, Image } from 'rebass';

type Props = {
  reason: string;
};

const NotFound = ({ reason }: Props) => (
  <Flex
    flexDirection="column"
    m={4}
    justifyContent="center"
    alignItems="center"
  >
    <Image
      width={[1, 1, 2 / 3]}
      src="img/not-found.svg"
      alt="Not found"
      m={2}
    />
    <Text fontSize={[3, 4]} mt={4}>
      {reason}
    </Text>
  </Flex>
);

export default NotFound;
