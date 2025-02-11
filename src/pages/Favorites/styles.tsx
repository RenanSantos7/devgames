import styled from 'styled-components/native';

export const Header = styled.View`
	margin-block: 24px;
	height: 48px;
	flex-direction: row;
	gap: 16px;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text.main};
`;

export const EmptyList = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.text.color};
	font-size: 18px;
`;

export const FavItem = styled.View`
	position: relative;
    margin-bottom: 12px;
`;

export const DeleteBtn = styled.Pressable`
	position: absolute;
	top: 12px;
	right: 12px;
	height: 48px;
	width: 48px;
	border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.secondary.main};
    align-items: center;
    justify-content: center;
`;
