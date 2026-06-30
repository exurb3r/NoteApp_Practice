import "express";
import type { AuthUser } from "./types.verifyJWT"; // adjust path

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export {};