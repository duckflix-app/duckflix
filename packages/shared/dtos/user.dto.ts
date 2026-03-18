import type { UserRole } from '../configs/roles';

export type { UserRole };

export interface UserMinDTO {
    id: string;
    name: string;
    role: UserRole;
    system: boolean;
}

export interface UserDTO extends UserMinDTO {
    email: string;
    isVerified: boolean;
    createdAt: Date | string;
}
