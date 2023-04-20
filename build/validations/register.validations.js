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
    (0, express_validator_1.check)("firstname")
        .exists()
        .withMessage("First name field is required")
        .isLength({ min: 3 })
        .withMessage("First name must have at least six (3) characters long")
        .isLength({ max: 20 })
        .withMessage("First name can't have more than twenty (20) characters")
        .not()
        .isEmpty()
        .withMessage("First name cannot be empty"),
    (0, express_validator_1.check)("lastname")
        .exists()
        .withMessage("Last name field is required")
        .isLength({ min: 3 })
        .withMessage("Last name must have at least six (3) characters long")
        .isLength({ max: 20 })
        .withMessage("Last name can't have more than twenty (20) characters")
        .not()
        .isEmpty()
        .withMessage("Last name cannot be empty"),
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
    //   check("avatar")
    //     .exists()
    //     .withMessage("Img field is required")
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
        .not()
        .isEmpty()
        .withMessage("About Me cannot be empty"),
    // check("cv")
    //   .exists()
    //   .withMessage("Cv field is required")
    // .isURL()
    // .withMessage("Cv must be a valid url")
    //   .not()
    //   .isEmpty()
    //   .withMessage("Cv cannot be empty"),
    (0, express_validator_1.check)("workfield")
        .isIn(['Marketing', 'Tecnologia', 'Administracion', 'Unknown'])
        .withMessage('Debe seleccionar un dato del listado'),
    (0, express_validator_1.check)("workingmodality")
        .isIn(['Presencial', 'Hibrido', 'Remoto', 'Unknown'])
        .withMessage('Debe seleccionar un dato del listado'),
    // check("projects")
    //   .exists()
    //   .withMessage("Projects field is required")
    // .isURL()
    // .withMessage("Projects must be a valid url")
    //   .not()
    //   .isEmpty()
    //   .withMessage("Projects cannot be empty"),
    // check("certifications")
    //   .exists()
    //   .withMessage("Certifications field is required")
    // .isURL()
    // .withMessage("Certifications must be a valid url")
    //     .not()
    //     .isEmpty()
    //     .withMessage("Certifications cannot be empty"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
