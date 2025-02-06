import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface FlexLineProps {
	gap?: number;
	justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  width?: number;
}

export const FlexLine = styled.View<FlexLineProps>`
	flex-direction: row;
	gap: ${props => (props.gap ? props.gap : 0)}px;
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : 'flex-start'};
	align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  width: ${props => props.width ? props.width : '100%'};
`;
