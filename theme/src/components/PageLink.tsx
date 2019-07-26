import React from 'react';
import { Styled, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';

type PageLinkProps = {
  name: string;
  selected: boolean;
  route: string;
};

const PageLink = ({ name, selected, route }: PageLinkProps) => {
  const { theme } = useThemeUI();
  return (
    <Styled.li
      style={{
        color: selected ? theme.colors.secondary : theme.colors.altText,
        display: 'inline-block',
        margin: '0 10px',
      }}
    >
      <Styled.a
        as={Link}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
        to={route}
      >
        {name}
      </Styled.a>
    </Styled.li>
  );
};

export default PageLink;
