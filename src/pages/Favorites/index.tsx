import { FlatList, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import FeatherIcon from '@expo/vector-icons/Feather';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';

import { AppStackParams } from '../../routes/app.routes';
import {
	DeleteBtn,
	EmptyList,
	FavItem,
	StyledText,
} from './styles';
import { useDataContext } from '../../contexts/dataContext';
import Card from '../../components/Card';
import Page from '../../components/Page';
import { Separator } from '../../components/layout/Separator';
import { Title1 } from '../../components/typography';
import BackBtn from '../../components/BackBtn';
import PageHeader from '../../components/PageHeader';

export default function Favorites() {
	const { favorites, switchFavorite } = useDataContext();
	const { goBack } = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<Page>
			<PageHeader title='Meus Favoritos' />

			<FlatList
				data={favorites}
				renderItem={({ item }) => (
					<FavItem>
						<Card game={item} />
						<DeleteBtn onPress={() => switchFavorite(item)}>
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
