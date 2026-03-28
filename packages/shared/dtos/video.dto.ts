import type { UserMinDTO } from './user.dto';

export type VideoVersionStatus = 'processing' | 'ready' | 'error' | 'waiting' | 'canceled';
export type VideoStatus = 'downloading' | 'processing' | 'ready' | 'error';

export interface VideoMinDTO {
    id: string;
    uploaderId: string | null;
    duration: number | null;
    status: VideoStatus;
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
    type: 'movie';
    id: string;
    name: string;
}
