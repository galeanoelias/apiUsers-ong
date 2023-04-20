import { Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { tokenVerificationErrors } from '../utils/jwt.handle';

export const requireToken = (req: any, res: Response, next: NextFunction) => {
    try {

        let token = req.headers?.authorization;

        if (!token) throw new Error("No Bearer");

        token = token.split(" ")[1];
        const _id  = jwt.verify(token, <string>process.env.JWT_SECRET);

        req.uid = _id;
        next();
    } catch (error: any) {
        console.log(error.message);
        return res.status(401).send({ error: tokenVerificationErrors })
    }
};