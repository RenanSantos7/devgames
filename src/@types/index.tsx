export interface IData {
	id: number;
	name: string;
	slug: string;
}

export interface IGame {
	id: string;
	slug: string;
	name: string;
	description: string;
	released: string;
	updated: string;
	background_image: string;
	background_image_additional?: string;
	website?: string;
	rating: number;
	rating_top: number;
	alternative_names: string[];
	platforms: IData[];
	genres: IData[];
	stores: IData[];
}
