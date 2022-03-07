import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  padding: 23px 0px;
  position: relative;
  &:not(:last-child):after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  .user_info {
    margin: 0 15px;
  }
  p {
    color: #888;
  }
`;
