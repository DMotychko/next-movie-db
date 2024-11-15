import {IMovies} from "@/models/IMovies";

export interface IResponseGetMovies {
	page: number;
	results: IMovies[];
	total_pages: number;
	total_results: number;
}
