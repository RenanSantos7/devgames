import { FlatList, Image, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AppStackParams } from '../../../../routes/app.routes';
import { FlexLine } from '../../../../components/layout/FlexLine';
import { Container, FavoritesBtn, Input, SearchBtn } from './styles';
import { useTheme } from 'styled-components';
import Pill from '../../../../components/layout/Pill';
import { useState } from 'react';
import SearchBar from '../../../../components/SearchBar';

interface HeaderProps {}

const categories = [
	'Arcade',
	'Ação',
	'Esportes',
	'Competitivo',
	'Estratégia',
	'Indie',
	'Corrida',
	'Luta',
];

export default function Header(props: HeaderProps) {
	const theme = useTheme();
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();

	const [searchQuery, setSearchQuery] = useState('');

	function handleSearch() {
		if (searchQuery) {
			navigate('Search', { query: searchQuery });
		}
	}

	return (
		<Container>
			<FlexLine justifyContent='space-between'>
				<Image
					source={require('../../../../assets/logo.png')}
					height={48}
				/>

				<FavoritesBtn
					activeOpacity={0.75}
					onPress={() => navigate('Favorites')}
				>
					<Ionicons name='bookmarks' color='#fff' size={24} />
				</FavoritesBtn>
			</FlexLine>

            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />

			<FlatList
				data={categories}
				renderItem={({ item }) => <Pill text={item} />}
				ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
				horizontal
			/>
		</Container>
	);
}
