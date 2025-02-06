import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useDataContext } from '../contexts/dataContext';
import theme from '../styles/theme';
import { BlurView } from 'expo-blur';

const Container = styled(BlurView)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	/* background-color: #000000aa; */
	z-index: 10;
`;

export default function Loading() {
	const { loading } = useDataContext();

	if (!loading) return null;

	return (
		<Container
			intensity={12}
			tint='dark'
			experimentalBlurMethod='dimezisBlurView'
		>
			<ActivityIndicator size={80} color={theme.colors.secondary.main} />
		</Container>
	);
}
