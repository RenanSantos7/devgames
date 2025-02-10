import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Background = styled.View`
	flex: 1;
	background-color: #00000077;
	justify-content: flex-end;
`;

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background.main};
	padding-inline: 20px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

export const Header = styled.View`
	height: 48px;
	align-items: center;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const CloseButton = styled.Pressable`
	height: 48px;
	width: 48px;
	border-radius: 48px;
	align-items: center;
	justify-content: center;
`;

export const TitleContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.text.main};
    transform: translateX(-24px);
`;

export const TextContainer = styled.ScrollView`
	margin-bottom: 40px;
`;

export const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.text.dark};
`;
