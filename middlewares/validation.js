// Middlware validation
import { check } from "express-validator";
import { validationHelper } from "../helpers/validate.helper.js";

export const validation = [
    check("name").
        exists().
        withMessage('El nombre es obligatorio').
        not().
        isEmpty().
        withMessage('El nombre no puede estar vacío').
        isLength({ min: 3, max: 20 }).
        withMessage('El nombre debe tener entre 3 y 20 caracteres'),

    check("lastname").
        exists().
        withMessage('El apellido es obligatorio').
        not().
        isEmpty().
        withMessage('El apellido no puede estar vacío').
        isLength({ min: 3, max: 20 }).
        withMessage('El apellido debe tener entre 3 y 20 caracteres'),

    check("email").
        exists().
        withMessage('El email es obligatorio').
        not().
        isEmpty().
        withMessage('El email no puede estar vacío').
        isEmail().
        withMessage('El email no es válido').
        isLength({ min: 5, max: 50 }).
        withMessage('El email debe tener entre 5 y 50 caracteres').
        normalizeEmail(),
    (req, res, next) => {
        validationHelper(req, res, next);
    }
]