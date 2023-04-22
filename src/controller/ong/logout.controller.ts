import {  Response } from "express";

export const logout = (req: any, res: Response) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true })
};