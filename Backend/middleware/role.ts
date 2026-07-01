import { Request, Response, NextFunction } from "express";

export const ROLES = {
  USER: 452,
  ADMIN: 765,
} as const;

export const permit = (...allowedRoles: number[]) => 
  (req: Request, res: Response, next: NextFunction): void => 
    {
      if (!req.user) {
        res.status(401).json({ message: "Not authenticated" });
        return;
      }

      if (!allowedRoles.includes(req.user.role)) {
        res.status(403).json({ message: "Forbidden" });
        return;
      }

      next();
  };