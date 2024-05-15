import { UserRole } from "@prisma/client";

export const viewRoutesPermissions = new Map<string, UserRole[]>([
  ["teams", [UserRole.ADMIN, UserRole.USER]],
  ["address", [UserRole.ADMIN, UserRole.USER]],
  ["users", [UserRole.ADMIN, UserRole.USER]],
  ["players", [UserRole.ADMIN, UserRole.USER]],
]);

export const modifyRoutesPermissions = new Map<string, UserRole[]>([
  ["teams", [UserRole.ADMIN]],
  ["address", [UserRole.ADMIN]],
  ["users", [UserRole.ADMIN]],
  ["players", [UserRole.ADMIN]],
]);