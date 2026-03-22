import type { VideoDTO } from './video.dto';

export interface MovieGenreDTO {
    id: string;
    name: string;
}

export interface MovieMinDTO {
    id: string;
    videoId: string;
    title: string;
    bannerUrl: string | null;
    posterUrl: string | null;
    rating: string | null;
    releaseYear: number | null;
    duration: number | null;
}

export interface MovieDTO extends MovieMinDTO {
    overview: string | null;
    video: VideoDTO;
    genres: MovieGenreDTO[];
}

export interface MovieDetailedDTO extends MovieDTO {
    inUserLibrary: boolean | null;
}
