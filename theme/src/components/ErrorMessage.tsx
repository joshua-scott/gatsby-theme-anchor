import React from 'react';
import { Flex, Image, Heading } from 'rebass';

type Props = {
  reason: string;
  image: string;
};

const ErrorMessage = ({ reason, image }: Props) => (
  <Flex
    flexDirection="column"
    m={2}
    justifyContent="center"
    alignItems="center"
  >
    <Image width={[1, 1, 2 / 3]} src={`img/${image}.svg`} alt={reason} my={5} />
    <Heading fontSize={[3, 4]} textAlign="center">
      {reason}
    </Heading>
  </Flex>
);

export default ErrorMessage;
