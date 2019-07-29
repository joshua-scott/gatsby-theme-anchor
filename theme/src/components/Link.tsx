import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Link as RebassLink, Box } from 'rebass';
import { isExternalUrl } from '../utils/link';

const LinkContainer = styled.span`
  & a {
    color: inherit;
    text-decoration: none;
  }

  & a:hover {
    transition: color 0.2s;
    color: ${props => props.theme.colors.accent};
  }
`;

type Props = {
  path: string;
  children: ReactNode;
};

const Link = ({ path, children, ...rest }: Props) => (
  <LinkContainer>
    {isExternalUrl(path) ? (
      <RebassLink href={path} target="_blank">
        {children}
      </RebassLink>
    ) : (
      <GatsbyLink to={path}>{children}</GatsbyLink>
    )}
  </LinkContainer>
);

export default Link;
