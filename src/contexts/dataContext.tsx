import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IGame } from '../@types';
import getData from '../services';

interface IDataContext {
	games: IGame[];
	loading: boolean;
	favorites: IGame[];
	switchFavorite: (slug: string) => void;
	clear: () => void;
}

const DataContext = createContext<IDataContext>(undefined);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [games, setGames] = useState<IGame[]>([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getAllGames() {
		setLoading(true);

		const endPoint =
			'https://api.rawg.io/api/games?key=d22198479fd144bcb2462c4d8e011db2';

		const results = await getData(endPoint, () => setLoading(false));
		return results;
	}

	async function storeData(key: string, value: any) {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(key, jsonValue);
		} catch (err) {
			console.error('Erro ao salvar no AsyncStorage:', err);
		}
	}

	async function getDataFromAyncStorage(key: string) {
		try {
			const jsonValue = await AsyncStorage.getItem(key);
			const value = jsonValue != null ? JSON.parse(jsonValue) : null;
			return value;
		} catch (err) {
			console.error('Erro ao carregar dados do AsyncStorage:', err);
		}
	}

	async function fetchData() {
		const storagedData = await getDataFromAyncStorage('games');

		if (storagedData === null || storagedData.length === 0) {
			const gamesFromApi = await getAllGames();
			const mappedGames = gamesFromApi.map((game: any) => {
				const gameGenres = game.genres.map((genre: any) => ({
					id: genre.id,
					name: genre.name,
					slug: genre.slug,
				}));
				const gamePlatforms = game.platforms.map((platform: any) => ({
					id: platform.platform.id,
					name: platform.platform.name,
					slug: platform.platform.slug,
				}));
				const gameStores = game.stores.map((store: any) => ({
					id: store.id,
					name: store.store.name,
					slug: store.store.slug,
				}));

				return {
					id: game.id,
					slug: game.slug,
					name: game.name,
					background_image: game.background_image,
					rating: game.rating,
					alternative_names: game.alternative_names,
					platforms: gamePlatforms,
					genres: gameGenres,
					stores: gameStores,
				};
			});
			setGames(mappedGames);
		} else {
			setGames(storagedData);
		}
	}

	function switchFavorite(slug: string) {
		if (favorites.some(item => item.slug === slug)) {
			setFavorites(prev => prev.filter(item => item.slug !== slug));
		} else {
			const selectedGame = games.find(game => game.slug === slug);
			setFavorites(prev => [...prev, selectedGame]);
		}
	}

	useEffect(() => {
		fetchData().then(() =>
			getDataFromAyncStorage('favorites').then(setFavorites),
		);
	}, []);

	useEffect(() => {
		if (games.length > 0) {
			storeData('games', games);
		}
	}, [games]);

	useEffect(() => {
		storeData('favorites', favorites);
	}, [favorites]);

	return (
		<DataContext.Provider
			value={{
				games,
				loading,
				favorites,
				switchFavorite,
				clear: () => AsyncStorage.clear(),
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	const context = useContext(DataContext);
	if (!context)
		throw new Error('DataContext não está sendo provido neste componente');
	return context;
}
