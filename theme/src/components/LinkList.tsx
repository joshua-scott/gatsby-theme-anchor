import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';

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
  margin: 0 10px;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

type Props = {
  links: PageLinkType[];
  direction: 'vertical' | 'horizontal';
  selected: string;
};

const LinkList = ({ direction, links, selected }: Props) => (
  <ul>
    {links.map(({ path, name }) => (
      <StyledLink selected={path === selected} key={path}>
        <Link to={path}>{name}</Link>
      </StyledLink>
    ))}
  </ul>
);

export default LinkList;
