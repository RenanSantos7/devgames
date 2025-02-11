import { IGame } from "../@types";

export default function formatGames(games: any[]): IGame[] {
    const mappedGames = games.map((game: any) => {
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

    return mappedGames;
};
