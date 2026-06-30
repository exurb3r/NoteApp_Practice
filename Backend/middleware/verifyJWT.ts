import { Request, Response, NextFunction } from "express";
import jwt,{ JwtPayload } from "jsonwebtoken";
import type { AuthUser } from "./types.verifyJWT";


const verifyJWT = ( req: Request, res: Response, next: NextFunction ) : void=> {
    const authHeader = req.headers.authorization;
    if( !authHeader ) {
        res.sendStatus(401);
        return
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err, decoded) => {
            console.log("SECRET:", process.env.ACCESS_TOKEN_SECRET);
            console.log("ERROR:", err?.message);
                console.log("DECODED:", decoded);
            if (err) {
                res.sendStatus(403);
                return;
            }
            req.user = decoded as AuthUser;
            next();
        }
    )
        
}

export default verifyJWT;