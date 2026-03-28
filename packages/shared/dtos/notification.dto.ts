export type NotificationType = 'info' | 'error' | 'success' | 'warning';

export interface NotificationDTO {
    id: string;
    userId: string | null;
    videoId: string | null;
    videoVerId: string | null;
    type: NotificationType;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}
