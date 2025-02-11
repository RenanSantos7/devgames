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
import formatGames from '../utils/formatGame';

interface IDataContext {
	games: IGame[];
	loading: boolean;
	favorites: IGame[];
	switchFavorite: (game: IGame) => void;
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
			const mappedGames = formatGames(gamesFromApi);
			setGames(mappedGames);
		} else {
			setGames(storagedData);
		}
	}

	async function switchFavorite(game: IGame) {
		if (favorites.some((fav: IGame) => fav.slug === game.slug)) {
			setFavorites(prev => prev.filter(item => item.slug !== game.slug));
		} else {
			setFavorites(prev => [...prev, game])
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

	// useEffect(() => {
	// 	storeData('favorites', favorites);
	// 	console.log(favorites);
	// }, [favorites]);

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
