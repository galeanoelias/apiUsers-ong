import { Response, NextFunction } from "express";
import { tokenVerificationErrors } from "../utils/jwt.handle";
import jwt from "jsonwebtoken";

export const requireRefreshToken = (req: any, res: Response, next: NextFunction) => {
    try {
        
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie) throw new Error("No existe el token");

        const _id = jwt.verify(refreshTokenCookie, <string>process.env.JWT_REFRESH);

        req.uid = _id
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: tokenVerificationErrors })
    }
}