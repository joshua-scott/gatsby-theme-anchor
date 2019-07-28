import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';
import { isExternalUrl } from '../utils/link';
import { toCamelCase } from '../utils/string';

type PageLinkProps = {
  children: ReactNode;
  selected: boolean;
};

const StyledLink = styled.li<PageLinkProps & { direction: string }>`
  color: ${props =>
    props.selected ? props.theme.colors.accent : props.theme.colors.textAlt};
  display: inline-block;
  ${props =>
    props.direction === 'horizontal'
      ? `margin: 0 ${props.theme.space[2]}px;`
      : `margin: ${props.theme.space[1]}px 0;`}

  & a {
    color: inherit;
    text-decoration: none;
  }

  & a:hover {
    transition: color 0.2s;
    color: ${props => props.theme.colors.accent};
  }
`;

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

      return (
        <StyledLink
          selected={path === selected}
          key={path}
          direction={direction}
        >
          {isExternalUrl(path) ? (
            <a href={path}>{content}</a>
          ) : (
            <Link to={path}>{content}</Link>
          )}
        </StyledLink>
      );
    })}
  </StyledList>
);

export default LinkList;
