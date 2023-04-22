"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authOngValidator = void 0;
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
//Ong register
exports.authOngValidator = [
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
    (0, express_validator_1.check)("website")
        .exists()
        .withMessage("About Me field is required")
        .isLength({ min: 0 })
        .withMessage("About Me must have at least six (0) characters long")
        .isLength({ max: 50 })
        .withMessage("About Me can't have more than twenty (350) characters"),
    (0, express_validator_1.check)("telephone")
        .exists()
        .withMessage("About Me field is required")
        .isLength({ min: 0 })
        .withMessage("About Me must have at least six (0) characters long")
        .isLength({ max: 20 })
        .withMessage("About Me can't have more than twenty (350) characters")
        .isStrongPassword({
        minNumbers: 5
    }),
    //  check("photo")
    //    .exists()
    //    .withMessage("Img field is required")
    // .isURL()
    // .withMessage("Img must be a valid url")
    //   .not()
    //   .isEmpty()
    //   .withMessage("Img cannot be empty"),
    (0, express_validator_1.check)("about_me")
        .exists()
        .withMessage("About Me field is required")
        .isLength({ min: 0 })
        .withMessage("About Me must have at least six (0) characters long")
        .isLength({ max: 350 })
        .withMessage("About Me can't have more than twenty (350) characters")
        .withMessage("About Me cannot be empty"),
    (0, express_validator_1.check)("ong_types")
        .isIn(['Presencial', 'Hibrido', 'Remoto', 'Unknown'])
        .withMessage('Debe seleccionar un dato del listado'),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
