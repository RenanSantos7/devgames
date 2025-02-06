import { Image, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { BackgroundImg, Container, Content, Rate, Title } from './styles';
import { FlexLine } from '../layout/FlexLine';
import { IGame } from '../../@types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../../routes/app.routes';

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
				<Title>{game.name}</Title>
				<FlexLine gap={8}>
					<AntDesign name='star' size={20} color='#FABB1E' />
					<Rate>{game.rating}/10</Rate>
				</FlexLine>
			</Content>
		</Container>
	);
}
