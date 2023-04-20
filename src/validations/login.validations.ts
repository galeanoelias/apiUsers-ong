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

//works for User, Nursery entities
export const loginValidator = [
    check("email")
      .exists()
      .withMessage("Email field is required")
      .isLength({ min: 5 })
      .withMessage("Email must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("Email can't have more than twenty (20) characters")
      .isEmail()
      .withMessage("It should be an email"),
      
    check("password")
      .exists()
      .withMessage("Password field is required")
      .isLength({ min: 6 })
      .withMessage("Password must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("Password can't have more than twenty (20) characters")
      .not()
      .isEmpty()
      .withMessage("Password cannot be empty"),
  
    (req: Request, res: Response, next: NextFunction) => {
      validateResult(req, res, next);
    },
  ];