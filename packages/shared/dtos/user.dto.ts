export interface UserDTO {
    id: string;
    name: string;
    email: string;
    createdAt: Date | string;
}

export interface UserMinDTO {
    id: string;
    name: string;
    role: 'watcher' | 'contributor' | 'admin';
}
