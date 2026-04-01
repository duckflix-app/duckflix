import type { VideoDTO } from './video.dto';

export interface MovieGenreDTO {
    id: string;
    name: string;
}

export interface MovieMinDTO {
    id: string;
    videoId: string;
    title: string;
    overview: string | null;
    bannerUrl: string | null;
    posterUrl: string | null;
    rating: string | null;
    releaseYear: number | null;
    runtime: number | null;
}

export interface MovieDTO extends MovieMinDTO {
    video: VideoDTO;
    genres: MovieGenreDTO[];
}

export interface MovieDetailedDTO extends MovieDTO {
    inUserLibrary: boolean | null;
}
