import type { UserRole } from '../configs/roles';

export type { UserRole };

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
