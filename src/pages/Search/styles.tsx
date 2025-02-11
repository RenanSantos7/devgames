import styled from 'styled-components/native';

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 96px;
`;

export const EmptyListTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 16px;
  text-align: center;
`;