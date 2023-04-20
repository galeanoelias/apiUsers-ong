import { Request, Response, NextFunction } from "express";

export const verifyFile = async (req: Request, res: Response, next: NextFunction) => {
    const file = req.body;
    if (!file) return res.status(403).send("Error of file");

    next();
}