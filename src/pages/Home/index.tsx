import { Button, FlatList, View } from 'react-native';
import { Section, Title } from './styles';
import { useDataContext } from '../../contexts/dataContext';
import Page from '../../components/Page';
import Header from './components/Header';
import { useMemo } from 'react';
import Card from '../../components/Card';
import EmptyList from './components/EmptyList';

export default function Home() {
	const { games, clear } = useDataContext();
	const sortedGames = useMemo(() => {
		return games
			.sort((a, b) => {
				return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
			})
			.slice(0, 5);
	}, [games]);
	return (
		<Page>
			<Header />

			<Button title='Limpar' onPress={() => clear()} />

			<Section>
				<Title>Jogos em alta</Title>

				<FlatList
					data={sortedGames}
					renderItem={({ item }) => <Card game={item} />}
					ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
					ListEmptyComponent={() => <EmptyList />}
					scrollEnabled
				/>
			</Section>
		</Page>
	);
}
