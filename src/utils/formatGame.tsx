import { IGame } from "../@types";

export default function formatGames(games: any[]): IGame[] {
    const mappedGames = games.map((game: any) => {
        const gameGenres = game.genres.map((genre: any) => ({
            id: genre.id,
            name: genre.name,
        }));
        const gamePlatforms = game.platforms.map((platform: any) => ({
            id: platform.platform.id,
            name: platform.platform.name,
        }));
        const gameStores = game.stores.map((store: any) => ({
            id: store.id,
            name: store.store.name,
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
