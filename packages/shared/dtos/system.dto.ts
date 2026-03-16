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
