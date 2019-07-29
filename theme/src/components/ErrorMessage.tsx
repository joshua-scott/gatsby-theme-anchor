import React, { ReactNode } from 'react';
import { Flex, Image, Heading } from 'rebass';
import { ImageLink } from '../types/Link';

type Props = {
  children: ReactNode;
  image: ImageLink;
};

const ErrorMessage = ({ children, image }: Props) => (
  <Flex
    flexDirection="column"
    m={2}
    justifyContent="center"
    alignItems="center"
  >
    <Image width={[1, 1, 2 / 3]} src={image.src} alt={image.alt} my={5} />
    <Heading fontSize={[4, 5]} textAlign="center">
      {children}
    </Heading>
  </Flex>
);

export default ErrorMessage;
