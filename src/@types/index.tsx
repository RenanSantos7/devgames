export interface IData {
	id: number;
	name: string;
	slug: string;
}

export interface IGame {
	id: number;
	slug: string;
	name: string;
	rating: number;
	background_image: string;
	alternative_names?: string[];
	genres: IData[];
	description?: string;
	released?: string;
	updated?: string;
	background_image_additional?: string;
	website?: string;
	platforms?: IData[];
	stores?: IData[];
}


export interface IGenre {
	id: number;
	name: string;
}