import { NavigationProp, useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { AppStackParams } from '../../routes/app.routes';
import { BackgroundImg, Container, Content, Rate } from './styles';
import { FlexLine } from '../layout/FlexLine';
import { IGame } from '../../@types';
import { Title3 } from '../typography';

interface CardProps {
	game: IGame;
}

export default function Card({ game }: CardProps) {
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<Container
			activeOpacity={0.75}
			onPress={() => {
				navigate('Game', { slug: game.slug });
			}}
		>
			<BackgroundImg
				source={{ uri: game.background_image }}
				resizeMode='cover'
				width={100}
				height={175}
			/>
			<Content>
				<Title3>{game.name}</Title3>
				<FlexLine gap={8}>
					<AntDesign name='star' size={20} color='#FABB1E' />
					<Rate>{game.rating}/10</Rate>
				</FlexLine>
			</Content>
		</Container>
	);
}
