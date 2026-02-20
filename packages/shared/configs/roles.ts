import type { UserRole } from '../dtos/user.dto';

export const roleHierarchy: Record<UserRole, number> = {
    admin: 0,
    contributor: 1,
    watcher: 2,
};
