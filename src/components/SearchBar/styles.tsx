import styled from 'styled-components/native';

export const Input = styled.TextInput`
	color: ${({ theme }) => theme.colors.text.main};
	background-color: ${({ theme }) => theme.colors.background.dark};
	flex: 1;
	height: 48px;
	border-radius: 24px;
	padding: 12px 16px;
`;

export const SearchBtn = styled.Pressable`
	width: 48px;
	height: 48px;
	justify-content: center;
	align-items: center;
`;
