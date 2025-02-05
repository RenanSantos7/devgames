import { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../styles/theme';

interface PageProps {
	children: ReactNode;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	padding-inline: 15px;
	background-color: ${({ theme }) => theme.colors.background.main};
`;

export default function Page(props: PageProps) {
  return (
    <Container>
       <StatusBar backgroundColor={theme.colors.background.main} barStyle='light-content' />
      {props.children}
    </Container>
  );
}
