import styled from 'styled-components';

export const StyledHeading = styled.h2`
  font-size: ${(props) => props.theme.fonts[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`;
