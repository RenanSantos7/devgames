import { Button, FlatList, View } from 'react-native';
import { useMemo } from 'react';

import { Section } from './styles';
import { Separator } from '../../components/layout/Separator';
import { Title2 } from '../../components/typography';
import { useDataContext } from '../../contexts/dataContext';
import Card from '../../components/Card';
import EmptyList from './components/EmptyList';
import Header from './components/Header';
import Page from '../../components/Page';

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

			{/* <Button title='Limpar' onPress={() => clear()} /> */}

			<Section>
				<Title2>Jogos em alta</Title2>

				<FlatList
					data={sortedGames}
					renderItem={({ item }) => <Card game={item} />}
					ItemSeparatorComponent={() => <Separator size={18} orientation='vertical' />}
					ListEmptyComponent={() => <EmptyList />}
					style={{ marginTop: 18 }}
					scrollEnabled
				/>
			</Section>
		</Page>
	);
}
