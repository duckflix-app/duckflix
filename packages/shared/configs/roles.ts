export const roles = ['admin', 'contributor', 'watcher'] as const;
export type UserRole = (typeof roles)[number];

export const roleHierarchy: Record<UserRole, number> = {
    admin: 0,
    contributor: 1,
    watcher: 2,
};

export const isAtLeast = (userRole: UserRole, required: UserRole): boolean => {
    return roleHierarchy[userRole] <= roleHierarchy[required];
};
