import type { VideoDTO } from './video.dto';

export interface EpisodeMinDTO {
    id: string;
    seasonId: string;
    episodeNumber: number;
    name: string;
    stillUrl: string | null;
    airDate: string | null;
    runtime: number | null;
    rating: string | null;
    videoId: string;
}

export interface EpisodeDTO extends EpisodeMinDTO {
    overview: string | null;
    video: VideoDTO | null;
}

export interface SeasonMinDTO {
    id: string;
    seriesId: string;
    seasonNumber: number;
    name: string;
    posterUrl: string | null;
    airDate: string | null;
    episodeCount?: number;
}

export interface SeasonDTO extends SeasonMinDTO {
    overview: string | null;
    episodes: EpisodeMinDTO[];
}

export interface SeriesGenreDTO {
    id: string;
    name: string;
}

export interface SeriesMinDTO {
    id: string;
    title: string;
    overview: string | null;
    posterUrl: string | null;
    bannerUrl: string | null;
    rating: string | null;
    firstAirDate: string | null;
    status: 'returning' | 'ended' | 'canceled' | 'in_production' | null;
}

export interface SeriesDTO extends SeriesMinDTO {
    genres: SeriesGenreDTO[];
    seasons: SeasonMinDTO[];
}

export interface SeriesDetailedDTO extends SeriesDTO {
    tmdbId: string | null;
    lastAirDate: string | null;
    inUserLibrary: boolean | null;
}
