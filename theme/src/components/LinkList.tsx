import React, { ReactNode } from 'react';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';
import { toCamelCase } from '../utils/string';
import Link from './Link';
import { Box } from 'rebass';

type ListDirection = 'vertical' | 'horizontal';

const StyledList = styled.ul<{ direction: ListDirection }>`
  padding: 0;
  display: flex;
  flex-direction: ${props =>
    props.direction === 'vertical' ? 'column' : 'row'};
`;

type Props = {
  links: PageLinkType[];
  direction?: 'vertical' | 'horizontal';
  selected?: string;
};

const LinkList = ({ direction = 'horizontal', links, selected }: Props) => (
  <StyledList direction={direction}>
    {links.map(({ path, name }) => {
      const content = typeof name === 'string' ? toCamelCase(name) : name;
      const margin = direction === 'horizontal' ? { mx: 1 } : { my: 1 };

      return (
        <Box {...margin} key={path}>
          <Link path={path} selected={path === selected}>
            {content}
          </Link>
        </Box>
      );
    })}
  </StyledList>
);

export default LinkList;
