import React, { ReactNode } from 'react';
import { Container, useThemeUI } from 'theme-ui';

type Props = {
  header: ReactNode;
  content: ReactNode;
};

const Hero = ({ header, content }: Props) => {
  // typescript please ...
  if (!content) return <React.Fragment>{header}</React.Fragment>;

  const { theme } = useThemeUI();
  return (
    <div style={{ background: theme.colors.secondary }}>
      {header}
      <Container>{content}</Container>
    </div>
  );
};

export default Hero;
