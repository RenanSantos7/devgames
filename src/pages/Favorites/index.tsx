import { FlatList, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import FeatherIcon from '@expo/vector-icons/Feather';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';

import { AppStackParams } from '../../routes/app.routes';
import {
	BackBtn,
	DeleteBtn,
	EmptyList,
	FavItem,
	Header,
	StyledText,
	Title,
} from './styles';
import { useDataContext } from '../../contexts/dataContext';
import Card from '../../components/Card';
import Page from '../../components/Page';
import { Separator } from '../../components/layout/Separator';

export default function Favorites() {
	const { favorites, switchFavorite } = useDataContext();
	const { goBack } = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<Page>
			<Header>
				<BackBtn onPress={() => goBack()}>
					<FontAwesomeIcon name='arrow-left' color='#fff' size={24} />
				</BackBtn>
				<Title>Meus Favoritos</Title>
			</Header>

			<FlatList
				data={favorites}
				renderItem={({ item }) => (
					<FavItem>
						<Card game={item} />
						<DeleteBtn onPress={() => switchFavorite(item.slug)}>
							<FeatherIcon name='trash' color='#fff' size={20} />
						</DeleteBtn>
					</FavItem>
				)}
				ListEmptyComponent={() => (
					<EmptyList>
						<StyledText>Você ainda não tem favoritos</StyledText>
					</EmptyList>
				)}
			/>
		</Page>
	);
}
