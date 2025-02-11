import { NavigationProp, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';

import { AppStackParams } from '../../routes/app.routes';

interface BackBtnProps {}

const Container = styled.Pressable`
	height: 48px;
	width: 48px;
	justify-content: center;
	align-items: center;
	border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.background.dark};
`;

export default function BackBtn(props: BackBtnProps) {
	const { goBack } = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<Container onPress={() => goBack()}>
			<FontAwesomeIcon name='arrow-left' color='#fff' size={24} />
		</Container>
	);
}
