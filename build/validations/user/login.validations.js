"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(403);
        res.send({ errors: err.array() });
    }
};
//works for User, Nursery entities
exports.loginValidator = [
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email field is required")
        .isLength({ min: 5 })
        .withMessage("Email must have at least six (6) characters long")
        .isLength({ max: 50 })
        .withMessage("Email can't have more than twenty (50) characters")
        .isEmail()
        .withMessage("It should be an email"),
    (0, express_validator_1.check)("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({ min: 6 })
        .withMessage("Password must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Password can't have more than twenty (20) characters")
        .not()
        .isEmpty()
        .withMessage("Password cannot be empty"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
