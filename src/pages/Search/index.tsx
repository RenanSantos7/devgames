import { FlatList } from 'react-native';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import { AppStackParams } from '../../routes/app.routes';
import { FlexLine } from '../../components/layout/FlexLine';
import { IGame } from '../../@types';
import { Separator } from '../../components/layout/Separator';
import { Title1, Title3 } from '../../components/typography';
import BackBtn from '../../components/BackBtn';
import Card from '../../components/Card';
import Page from '../../components/Page';
import SearchBar from '../../components/SearchBar';
import getData from '../../services';
import formatGames from '../../utils/formatGame';
import { EmptyListContainer, EmptyListTxt } from './styles';

export default function Search() {
	const { params } = useRoute<RouteProp<AppStackParams, 'Search'>>();

	const [query, setQuery] = useState('');
	const [games, setGames] = useState<IGame[]>([]);

	async function handleSearch(str: string) {
		const endPoint = `https://api.rawg.io/api/games?
page_size=5&key=d22198479fd144bcb2462c4d8e011db2&search=${str}`;
		const foundedGames = await getData(endPoint);
		const formatedGames = formatGames(foundedGames);
		setGames(formatedGames);
	}

	useFocusEffect(
		useCallback(() => {
			setQuery(params.query);
			handleSearch(params.query);
		}, [params.query]),
	);

	return (
		<Page>
			<FlexLine gap={16} style={{ marginVertical: 24 }}>
				<BackBtn />
				<Title1>Pesquisar</Title1>
			</FlexLine>

			<SearchBar
				searchQuery={query}
				setSearchQuery={setQuery}
				handleSearch={() => handleSearch(query)}
			/>

			<FlatList
				data={games}
				renderItem={({ item }) => <Card game={item} />}
				ItemSeparatorComponent={() => (
					<Separator orientation='vertical' size={12} />
				)}
				ListEmptyComponent={() => (
					<EmptyListContainer>
						<EmptyListTxt>
							Não encontramos um jogo com esse nome...
						</EmptyListTxt>
					</EmptyListContainer>
				)}
			/>
		</Page>
	);
}
