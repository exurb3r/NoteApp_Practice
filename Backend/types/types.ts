import "express";
import type { JwtUserPayload } from "./types.verifyJWT";

declare global {
  namespace Express {
    interface Request {
      user?: JwtUserPayload;
    }
  }
}

export {};