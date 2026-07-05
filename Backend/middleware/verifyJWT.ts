import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtUserPayload } from "../types/types.verifyJWT";

const verifyJWT = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies?.token;

    if (!token) {
        res.sendStatus(401);
        return;
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) {
        res.sendStatus(500);
        return;
    }

    jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            res.sendStatus(403);
            return;
        }
        req.user = decoded as JwtUserPayload;
        next();
    });
};

export default verifyJWT;