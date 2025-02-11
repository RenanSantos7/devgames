import { FlatList } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

import {
	DeleteBtn,
	EmptyList,
	FavItem,
	StyledText,
} from './styles';
import { useDataContext } from '../../contexts/dataContext';
import Card from '../../components/Card';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

export default function Favorites() {
	const { favorites, switchFavorite } = useDataContext();

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
