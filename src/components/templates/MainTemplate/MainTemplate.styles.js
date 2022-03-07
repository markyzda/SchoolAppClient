import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 1fr 0.5fr;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;
