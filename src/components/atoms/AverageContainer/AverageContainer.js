import styled from 'styled-components';

export const AverageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-weight: bold;
  background-color: ${(props) => {
    const average = props.average;
    if (average <= 3) return props.theme.colors.error;
    else if (average > 3 && average < 4) return props.theme.colors.good;
    else return props.theme.colors.success;
  }};
`;
