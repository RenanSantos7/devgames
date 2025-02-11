import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { AppStackParams } from '../../routes/app.routes';
import { IGame } from '../../@types';
import formatGames from '../../utils/formatGame';
import getData from '../../services';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import { Separator } from '../../components/layout/Separator';

export default function Genre() {
	const { params } = useRoute<RouteProp<AppStackParams, 'Genre'>>();

	const [games, setGames] = useState<IGame[]>([]);

	async function fetchData(): Promise<IGame[]> {
		const endPoint = `https://api.rawg.io/api/games?page_size=5&key=d22198479fd144bcb2462c4d8e011db2&genres=${params.genre.id}`;
		const data = await getData(endPoint).then(data => formatGames(data));
		return data;
	}

	useFocusEffect(
		useCallback(() => {
			async function loadData() {
				try {
					const result = await fetchData();
					setGames(result);
				} catch (error) {
					console.error('Erro ao carregar dados:', error);
				}
			}

			loadData();
		}, [params.genre]),
	);

	return (
		<Page>
			<PageHeader title={params.genre ? params.genre.name : 'Gênero'} />

			<FlatList
				data={games}
				renderItem={({ item }) => <Card game={item} />}
				ItemSeparatorComponent={() => (
					<Separator size={18} orientation='vertical' />
				)}
				// ListEmptyComponent={() => <EmptyList />}
				style={{ marginTop: 18 }}
				scrollEnabled
			/>
		</Page>
	);
}
