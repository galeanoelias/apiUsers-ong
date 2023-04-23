"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUserValidator = void 0;
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
//User register
exports.authUserValidator = [
    (0, express_validator_1.check)("username")
        .exists()
        .withMessage("Username field is required")
        .isLength({ min: 5 })
        .withMessage("Username must have at least six (8) characters long")
        .isLength({ max: 20 })
        .withMessage("Username can't have more than twenty (20) characters")
        .not()
        .isEmpty()
        .withMessage("Username cannot be empty"),
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email field is required")
        .isLength({ min: 5 })
        .withMessage("Email must have at least six (5) characters long")
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
        .isStrongPassword({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters")
        .not()
        .isEmpty()
        .withMessage("Password cannot be empty"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
