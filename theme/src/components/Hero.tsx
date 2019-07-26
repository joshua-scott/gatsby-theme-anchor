import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  header: ReactNode;
  content: ReactNode;
};

const Container = styled.div`
  padding: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  max-width: 850px;
  margin: auto;
`;

const HeroContainer = styled.div`
  background: ${props => props.theme.colors.primary};
`;

const Hero = ({ header, content }: Props) => {
  // typescript please ...
  if (!content) return <React.Fragment>{header}</React.Fragment>;

  return (
    <HeroContainer>
      {header}
      <Container>{content}</Container>
    </HeroContainer>
  );
};

export default Hero;
