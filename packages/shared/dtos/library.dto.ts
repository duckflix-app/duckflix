import type { ContentDTO } from './content.dto';
import type { UserMinDTO } from './user.dto';

export type LibraryType = 'watchlist' | 'custom';

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
    id: string;
    libraryId: string;
    addedAt: string;
}

export interface LibraryItemDTO extends LibraryItemMinDTO {
    content: ContentDTO;
}
