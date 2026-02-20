export type UserRole = 'admin' | 'contributor' | 'watcher';

export interface UserMinDTO {
    id: string;
    name: string;
    role: UserRole;
}

export interface UserDTO extends UserMinDTO {
    email: string;
    isVerified: boolean;
    createdAt: Date | string;
}
