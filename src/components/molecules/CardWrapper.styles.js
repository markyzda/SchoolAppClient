import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 22px;
  box-shadow: 0px 0px 5px 3px #e1e1e1;
  padding: 35px 25px;
  ul {
    list-style: none;
    min-width: 380px;
    margin-top: 15px;
  }
`;
