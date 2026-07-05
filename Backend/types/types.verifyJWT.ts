import "express";
import type { JwtPayload } from "jsonwebtoken";

export interface JwtUserPayload extends JwtPayload {
  id: string;
  role: number;
}