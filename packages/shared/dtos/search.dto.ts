export const SORT_VALUES = ['title', 'rating', 'date', 'release'] as const;
export const SORT_ORDER_VALUES = ['asc', 'desc'] as const;

export type SortValue = (typeof SORT_VALUES)[number];
export type SortOrder = (typeof SORT_ORDER_VALUES)[number];

export interface SearchResultDTO {
    type: 'movie' | 'series';
    id: string;
    title: string;
    image: string | null;
    rating: number | null;
    createdAt: string;
    release: string;
}
