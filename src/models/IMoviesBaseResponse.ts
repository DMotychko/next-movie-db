import {IMovie} from "@/models/IMovie";

export interface IMoviesBaseResponse {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}
