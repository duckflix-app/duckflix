import type { UserMinDTO } from './user.dto';

export const VIDEO_VERSION_STATUSES = ['processing', 'ready', 'error', 'waiting', 'canceled'] as const;
export const VIDEO_STATUSES = ['downloading', 'processing', 'ready', 'error'] as const;
export const VIDEO_TYPES = ['movie', 'episode'] as const;

export type VideoVersionStatus = (typeof VIDEO_VERSION_STATUSES)[number];
export type VideoStatus = (typeof VIDEO_STATUSES)[number];
export type VideoType = (typeof VIDEO_TYPES)[number];

export interface VideoMinDTO {
    id: string;
    uploaderId: string | null;
    duration: number | null;
    status: VideoStatus;
    type: VideoType;
    createdAt: string;
}

export interface VideoDTO extends VideoMinDTO {
    uploader: UserMinDTO | null;
    versions: VideoVersionDTO[];
    generatedVersions: VideoVersionDTO[] | null;
    subtitles: SubtitleDTO[];
}

export interface VideoVersionDTO {
    id: string;
    height: number;
    width: number | null;
    streamUrl: string;
    fileSize: number | null;
    mimeType: string | null;
    status: VideoVersionStatus;
    isOriginal: boolean;
}

export interface SubtitleDTO {
    id: string;
    videoId: string;
    language: string;
    subtitleUrl: string;
    createdAt: string;
}

export interface VideoResolved {
    type: VideoType;
    id: string;
    name: string;
}
