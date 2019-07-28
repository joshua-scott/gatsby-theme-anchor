import { Box } from 'rebass';
import styled from 'styled-components';

const Container = styled(Box)`
  box-sizing: border-box;
  flex: 1 1 auto;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props =>
    props.theme.breakpoints[props.theme.breakpoints.length - 1]};
  width: 90vw;
`;

export default Container;
