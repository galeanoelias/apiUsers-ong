"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const logout = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true });
};
exports.logout = logout;
