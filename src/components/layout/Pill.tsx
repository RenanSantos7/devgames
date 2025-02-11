import { TouchableWithoutFeedbackProps } from 'react-native';
import styled from 'styled-components/native';

interface PillProps extends TouchableWithoutFeedbackProps {
	text: string;
	type?: 'genre' | 'platform';
}

const Genre = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.background.light};
    height: 36px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    padding-inline: 12px;
`;

const Platform = styled(Genre)`
	background-color: ${({ theme }) => theme.colors.background.darker};
`;

const BtText = styled.Text`
    color: ${({ theme }) => theme.colors.text.main};
    font-weight: bold;
    font-size: 14px;
`;

export default function Pill({ text, type = 'platform', ...props }: PillProps) {
	if (type === 'genre') {
		return (
			<Genre activeOpacity={0.75} {...props}>
				<BtText>{text}</BtText>
			</Genre>
		);
	}

	return (
		<Platform activeOpacity={0.75}>
			<BtText>{text}</BtText>
		</Platform>
	);
}
