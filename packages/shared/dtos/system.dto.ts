export type TranscodeType = 'off' | 'compatibility' | 'smart';

export interface SystemSettingsDTO {
    features: {
        autoTranscoding: TranscodeType;
        concurrentProcessing: number;
        registration: {
            enabled: boolean;
            trustEmails: boolean;
        };
    };
    preferences: {
        subtitles: { lang: string; variants: number }[];
    };
    external: {
        tmdb: {
            apiKey: string;
        };
        openSubtitles: {
            apiKey: string;
            username: string;
            password: string;
            useLogin: boolean;
        };
        email: {
            enabled: boolean;
            smtpSettings?: {
                host: string;
                port: number;
                username: string;
                password: string;
            };
        };
    };
}

export interface StorageStatisticsDTO {
    usedBytes: number; // int
    limitBytes: number; // int
    availableBytes: number; // int
    usedPercent: number; // float
    used: string; // .0 Unit
    limit: string; // .0 Unit
    available: string; // .0 Unit
}

export interface SystemStatisticsDTO {
    version: string;
    uptime: number;
    sessions: {
        total: number;
    };
    tasks: {
        working: number;
        queue: number;
    };
    storage: StorageStatisticsDTO;
}
