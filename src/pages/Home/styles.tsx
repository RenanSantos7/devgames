import styled from 'styled-components/native';

export const Section = styled.View`
    flex: 1;
    margin-bottom: 20px;
    height: 1900px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text.main};
	font-weight: bold;
    font-size: 18px;
    margin-bottom: 18px;
`;
