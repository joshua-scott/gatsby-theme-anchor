import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Link as RebassLink } from 'rebass';
import { isExternalUrl } from '../utils/link';

const StyledLink = styled.li`
  display: inline-block;

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

const Link = ({ path, children }: Props) => (
  <StyledLink as="li">
    {isExternalUrl(path) ? (
      <RebassLink href={path} target="_blank">
        {children}
      </RebassLink>
    ) : (
      <GatsbyLink to={path}>{children}</GatsbyLink>
    )}
  </StyledLink>
);

export default Link;
