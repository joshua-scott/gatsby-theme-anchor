import React, { ReactNode } from 'react';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';
import { toCamelCase } from '../utils/string';
import Link from './Link';
import { Box } from 'rebass';

type ListDirection = 'vertical' | 'horizontal';

const StyledList = styled.ul<{ direction: ListDirection }>`
  padding: 0;
  margin: ${props => props.theme.space[1]}px;
  display: flex;
  flex-direction: ${props =>
    props.direction === 'vertical' ? 'column' : 'row'};
`;

type Props = {
  links: PageLinkType[];
  direction?: 'vertical' | 'horizontal';
  showSeparator?: boolean;
};

const LinkList = ({ direction = 'horizontal', links }: Props) => (
  <StyledList direction={direction}>
    {links.map(({ path, name }) => {
      const content = typeof name === 'string' ? toCamelCase(name) : name;
      const margin = direction === 'horizontal' ? { mx: 1 } : { my: 1 };

      return (
        <Box {...margin} key={path}>
          <Link path={path}>{content}</Link>
        </Box>
      );
    })}
  </StyledList>
);

export default LinkList;
