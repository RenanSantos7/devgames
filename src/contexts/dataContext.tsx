import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IGame, IGenre } from '../@types';
import getData from '../services';
import formatGames from '../utils/formatGame';
import formatGenres from '../utils/formatGenres';

interface IDataContext {
	games: IGame[];
	genres: IGenre[];
	loading: boolean;
	favorites: IGame[];
	switchFavorite: (game: IGame) => void;
	clear: () => void;
}

const DataContext = createContext<IDataContext>(undefined);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [games, setGames] = useState<IGame[]>([]);
	const [genres, setGenres] = useState<IGenre[]>([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getAllGames() {
		setLoading(true);

		const endPoint =
			'https://api.rawg.io/api/games?key=d22198479fd144bcb2462c4d8e011db2';

		const results = await getData(endPoint, () => setLoading(false));
		return results;
	}

	async function getGenres() {
		const results = await getData(
			'https://api.rawg.io/api/genres?key=d22198479fd144bcb2462c4d8e011db2',
			() => setLoading(false)
		).then(data => formatGenres(data));

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
		const storagedGames = await getDataFromAyncStorage('games');
		const storagedGenres = await getDataFromAyncStorage('genres');
		const storagedFavorites = await getDataFromAyncStorage('favorites');

		if (storagedGames === null || storagedGames.length === 0) {
			const gamesFromApi = await getAllGames();
			const mappedGames = formatGames(gamesFromApi);
			setGames(mappedGames);
		} else {
			setGames(storagedGames);
		}

		if (storagedGenres === null || storagedGenres.length === 0) {
			const genresFromApi = await getGenres().then(data => formatGenres(data));
			setGenres(genresFromApi);
		} else {
			setGenres(storagedGenres);
		}

		if (storagedFavorites !== null && storagedFavorites.length > 0) {
			setFavorites(storagedFavorites);
		}
	}

	async function switchFavorite(game: IGame) {
		if (favorites.some((fav: IGame) => fav.slug === game.slug)) {
			setFavorites(prev => prev.filter(item => item.slug !== game.slug));
		} else {
			setFavorites(prev => [...prev, game]);
		}
	}

	useEffect(() => {
		fetchData()
	}, []);

	useEffect(() => {
		if (games.length > 0) {
			storeData('games', games);
		}
	}, [games]);

	useEffect(() => {
		if (genres.length > 0) {
			storeData('genres', genres);
		}
	}, [genres]);

	useEffect(() => {
		if (favorites.length > 0) {
			storeData('favorites', favorites);
		}
	}, [favorites]);

	useEffect(() => {
		storeData('favorites', favorites);
		console.log(favorites);
	}, [favorites]);

	return (
		<DataContext.Provider
			value={{
				games,
				genres,
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
