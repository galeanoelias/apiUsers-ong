import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

//Ong register
export const authOngValidator = [
  check("username")
    .exists()
    .withMessage("Username field is required")
    .isLength({ min: 5 })
    .withMessage("Username must have at least six (8) characters long")
    .isLength({ max: 20 })
    .withMessage("Username can't have more than twenty (20) characters")
    .not()
    .isEmpty()
    .withMessage("Username cannot be empty"),
  
  check("email")
    .exists()
    .withMessage("Email field is required")
    .isLength({ min: 5 })
    .withMessage("Email must have at least six (5) characters long")
    .isLength({ max: 50 })
    .withMessage("Email can't have more than twenty (50) characters")
    .isEmail()
    .withMessage("It should be an email"),

  check("password")
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
    .withMessage(
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters"
    )
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty"),

  check("website")
    .exists()
    .withMessage("About Me field is required")
    .isLength({ min: 0 })
    .withMessage("About Me must have at least six (0) characters long")
    .isLength({ max: 50 })
    .withMessage("About Me can't have more than twenty (350) characters"),

  check("telephone")
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

  check("about_me")
    .exists()
    .withMessage("About Me field is required")
    .isLength({ min: 0 })
    .withMessage("About Me must have at least six (0) characters long")
    .isLength({ max: 350 })
    .withMessage("About Me can't have more than twenty (350) characters")
    .withMessage("About Me cannot be empty"),

  check("ong_types")
    .isIn(['Presencial', 'Hibrido', 'Remoto', 'Unknown'])
    .withMessage('Debe seleccionar un dato del listado'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];