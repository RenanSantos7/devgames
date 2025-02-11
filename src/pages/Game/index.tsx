import { FlatList, ScrollView } from 'react-native';
import {
	Link,
	NavigationProp,
	RouteProp,
	useNavigation,
} from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import AntDesignIcon from '@expo/vector-icons/AntDesign';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';
import IoniconsIcon from '@expo/vector-icons/Ionicons';

import { AppStackParams } from '../../routes/app.routes';
import {
	Carroussel,
	CarrousselImage,
	FlexLineBt,
	FlexList,
	MoreBtn,
	MoreBtnTxt,
	Rating,
	Section,
	SimpleText,
	TopButton,
	WebSiteBtn,
} from './styles';
import { FlexLine } from '../../components/layout/FlexLine';
import { IGame } from '../../@types';
import { Title1, Title2 } from '../../components/typography';
import { useDataContext } from '../../contexts/dataContext';
import Description from './components/Description';
import Page from '../../components/Page';
import Pill from '../../components/layout/Pill';
import getData from '../../services';

interface GameProps {
	route: RouteProp<AppStackParams, 'Game'>;
}

export default function Game({ route }: GameProps) {
	const { params } = route;
	const { goBack, navigate } =
		useNavigation<NavigationProp<AppStackParams>>();
	const { favorites, switchFavorite } = useDataContext();

	const [game, setGame] = useState<IGame>({
		id: 0,
		slug: params.slug,
		name: 'Jogo',
		rating: 10,
		background_image: '',
		alternative_names: [''],
		genres: [{ id: 0, name: 'Gênero', slug: '' }],
		platforms: [{ id: 0, name: 'Plataforma', slug: '' }],
		stores: [{ id: 0, name: 'Loja', slug: '' }],
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis risus ut dui mattis elementum. Pellentesque tristique id massa sit amet ullamcorper. Praesent accumsan leo ut dapibus scelerisque. Integer libero massa, dictum nec orci vitae, efficitur molestie eros. Etiam lacus urna, dictum non nulla quis, accumsan elementum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus erat mauris, sit amet dapibus tellus ultricies eget. Nunc suscipit ac ligula vitae sagittis. Sed non ligula at magna ultricies lacinia id in purus. In laoreet posuere nunc a semper. Aliquam erat volutpat. Maecenas dignissim est a viverra vehicula. Nam ullamcorper facilisis risus sed tristique. Maecenas malesuada lacus quis mi lobortis tincidunt vitae ut erat. Maecenas luctus odio ac libero tincidunt, nec.',
		released: '2025-01-01',
	});
	const [modalOpen, setModalOpen] = useState(false);
	const isFavorite = useMemo(
		() => favorites.some(fav => fav.slug === game.slug),
		[favorites, game],
	);

	async function getGameData() {
		try {
			const endPoint = `https://api.rawg.io/api/games/${params.slug}?key=d22198479fd144bcb2462c4d8e011db2`;
			const data = await getData(endPoint);

			const gameData = {
				id: data.id,
				slug: data.slug,
				name: data.name,
				background_image: data.background_image || '',
				background_image_additional:
					data.background_image_additional || '',
				description:
					data.description_raw || 'Descrição não disponível.',
				rating: data.rating || 0,
				website: data.website || '',
				platforms:
					data.platforms?.map((p: any) => ({
						id: p.platform.id,
						name: p.platform.name,
						slug: p.platform.slug,
					})) || [],
				genres:
					data.genres?.map((g: any) => ({
						id: g.id,
						name: g.name,
						slug: g.slug,
					})) || [],
				stores:
					data.stores?.map((s: any) => ({
						id: s.id,
						name: s.store.name,
						slug: s.store.slug,
					})) || [],
			};

			setGame(gameData);
		} catch (error) {
			console.error('Erro ao buscar os dados do jogo:', error);
		}
	}

	useEffect(() => {
		getGameData();
	}, []);

	return (
		<Page style={{ position: 'relative' }} noPadding>
			<ScrollView>
				<FlexLineBt>
					<TopButton onPress={() => goBack()}>
						<FontAwesomeIcon
							name='arrow-left'
							color='#fff'
							size={24}
						/>
					</TopButton>
					<TopButton onPress={() => switchFavorite(game)}>
						<IoniconsIcon
							name={isFavorite ? 'bookmark' : 'bookmark-outline'}
							color='#fff'
							size={24}
						/>
					</TopButton>
				</FlexLineBt>

				<Carroussel>
					<FlatList
						data={[
							game.background_image,
							game.background_image_additional,
						]}
						renderItem={({ item }) => (
							<CarrousselImage
								source={{ uri: item }}
								resizeMode='cover'
							/>
						)}
						horizontal
					/>
				</Carroussel>

				<Section style={{ marginTop: 16 }}>
					<WebSiteBtn>
						<Link href={game.website} action={{ type: '' }}>
							<FontAwesomeIcon
								name='link'
								color='#fff'
								size={24}
							/>
						</Link>
					</WebSiteBtn>

					<FlexLine gap={8}>
						<AntDesignIcon name='star' size={20} color='#FABB1E' />
						<Rating>{game.rating}/10</Rating>
					</FlexLine>
					<Title1>{game.name}</Title1>
				</Section>

				<Section>
					<Title2>Gêneros</Title2>

					<FlexList>
						{game.genres.map(item => (
							<Pill
								key={item.id}
								onPress={() =>
									navigate('Genre', { genre: item })
								}
								text={item.name}
								type='genre'
							/>
						))}
					</FlexList>
				</Section>

				<Section>
					<Title2>Descrição</Title2>
					<SimpleText numberOfLines={5} ellipsizeMode='tail'>
						{game.description}
					</SimpleText>

					<MoreBtn
						activeOpacity={0.75}
						onPress={() => setModalOpen(true)}
					>
						<MoreBtnTxt>Ler descrição completa</MoreBtnTxt>
					</MoreBtn>
				</Section>

				<Section>
					<Title2>Plataformas</Title2>

					<FlexList>
						{game.platforms.map(platform => (
							<Pill key={platform.id} text={platform.name} />
						))}
					</FlexList>
				</Section>

				<Section>
					<Title2>Lojas</Title2>

					<FlexList>
						{game.stores.map(store => (
							<Pill key={store.id} text={store.name} />
						))}
					</FlexList>
				</Section>

				<Description
					visibility={modalOpen}
					setVisibility={setModalOpen}
					text={game.description}
				/>
			</ScrollView>
		</Page>
	);
}
