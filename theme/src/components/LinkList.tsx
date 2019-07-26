import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { PageLink as PageLinkType } from '../types/Link';
import styled from 'styled-components';

function isUrlValid(str: string) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return regex.test(str);
}

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
  direction?: 'vertical' | 'horizontal';
  selected?: string;
};

const LinkList = ({ direction = 'horizontal', links, selected }: Props) => (
  <ul>
    {links.map(({ path, name }) => (
      <StyledLink selected={path === selected} key={path}>
        {isUrlValid(path) ? (
          <a href={path}>{name}</a>
        ) : (
          <Link to={path}>{name}</Link>
        )}
      </StyledLink>
    ))}
  </ul>
);

export default LinkList;
