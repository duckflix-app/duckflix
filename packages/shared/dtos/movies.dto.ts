import type { UserMinDTO } from './user.dto';

export type MovieStatus = 'downloading' | 'processing' | 'ready' | 'error' | 'waiting';

export interface GenreDTO {
    id: string;
    name: string;
}

export interface MovieVersionDTO {
    id: string;
    height: number;
    width: number | null;
    streamUrl: string;
    fileSize: number | null;
    mimeType: string | null;
    status: MovieStatus;
    isOriginal: boolean;
}

export interface MovieDTO {
    id: string;
    title: string;
    bannerUrl: string | null;
    posterUrl: string | null;
    rating: string | null;
    releaseYear: number | null;
    duration: number | null;
    genres: GenreDTO[];
    status: MovieStatus;
    createdAt: string;
}

export interface MovieDetailedDTO extends MovieDTO {
    description: string | null;
    user: UserMinDTO;
    versions: MovieVersionDTO[];
}
