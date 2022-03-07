import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  box-shadow: 0px 0px 2px 2px #444444;
  background-color: white;
  font-size: ${({ theme }) => theme.fonts.s};
  transition: 0.4s;
  &:focus {
    transform: scale(103%);
  }
`;
