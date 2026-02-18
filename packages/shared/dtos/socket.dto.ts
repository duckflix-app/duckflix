export interface DownloadProgress {
    percent: number;
    speed: string;
    eta: string;
    peers: {
        active: number;
        total: number;
        connecting: number;
    };
}

export interface JobProgress {
    time: string;
    seconds: number;
    progress: number;
}
