import type { MovieMinDTO } from './movies.dto';
import type { UserMinDTO } from './user.dto';

export type LibraryType = 'watchlist' | 'library' | 'custom';

export interface LibraryMinDTO {
    id: string;
    userId: string;
    name: string;
    type: LibraryType;
    size: number;
    createdAt: string;
}

export interface LibraryDTO extends LibraryMinDTO {
    user: UserMinDTO;
}

export interface LibraryItemMinDTO {
    libraryId: string;
    movieId: string;
}

export interface LibraryItemDTO extends LibraryItemMinDTO {
    movie: MovieMinDTO;
}
