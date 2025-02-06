import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	position: relative;
	border-radius: 8px;
	width: 100%;
	height: 150px;
	background-color: '#ccc';
	overflow: hidden;
`;

export const BackgroundImg = styled.Image`
	width: 100%;
`;

export const Content = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
	padding: 12px;
	justify-content: flex-end;
	background-color: #00000077;
	gap: 8px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text.main};
	font-weight: bold;
	font-size: 18px;
`;

export const Rate = styled.Text`
	color: ${({ theme }) => theme.colors.text.dark};
	font-size: 16px;
`;
