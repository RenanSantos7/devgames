import { IGenre } from "../@types";

export default function formatGenres(genres: any[]):IGenre[] {
    return genres.map(genre => ({
        id: genre.id,
        name: genre.name,
    }))
};
