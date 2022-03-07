import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.m} ';
    color: ${({ theme }) => theme.colors.main}';
  font-weight: bold;
`;
