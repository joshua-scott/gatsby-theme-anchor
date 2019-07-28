import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';
import { isExternalUrl } from '../utils/link';

type PageLinkProps = {
  children: ReactNode;
  selected: boolean;
};

const StyledLink = styled.li<PageLinkProps>`
  color: ${props =>
    props.selected
      ? props.theme.colors.secondary
      : props.theme.colors.invertText};
  display: inline-block;
  margin: ${props => props.theme.space[1]}px;

  & a {
    color: inherit;
    text-decoration: none;
  }

  & a:hover {
    color: ${props => props.theme.colors.secondaryLight};
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
      const content = typeof name === 'string' ? name.toUpperCase() : name;

      return (
        <StyledLink selected={path === selected} key={path}>
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
