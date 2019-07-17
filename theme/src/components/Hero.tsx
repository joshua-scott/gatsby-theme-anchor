import React, { ReactNode } from 'react';
import { Container, useThemeUI } from 'theme-ui';

type Props = {
  header: ReactNode;
  content: ReactNode;
};

const HeroContainer = ({ header, content }: Props) => {
  const { theme } = useThemeUI();
  return (
    <div style={{ background: theme.colors.secondary }}>
      {header}
      <Container>{content}</Container>
    </div>
  );
};

export default HeroContainer;
