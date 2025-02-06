import styled from 'styled-components/native';

interface SeparatorProps {
	size: number;
	orientation?: 'horizontal' | 'vertical';
}

export const Separator = styled.View<SeparatorProps>`
	width: ${({ orientation = 'horizontal', size }) =>
		orientation === 'horizontal' ? size : 0}px;
	height: ${({ orientation = 'horizontal', size }) =>
		orientation === 'vertical' ? size : 0}px;
`;
