import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: black;
  border: none;
  border-radius: 15px;
  padding: 10px 25px;
  font-size: ${({ theme }) => theme.fonts.m};
`;
