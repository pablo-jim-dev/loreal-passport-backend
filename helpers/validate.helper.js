import { validationResult } from "express-validator";
// import { TURNSTILE_KEY } from "../../config.js";

export const validationHelper = async(req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        console.error(error);
        console.log("Body request: ", req.body);
        res.status(403).json({ message: typeof error !== 'object' ? ['Ha ocurrido un error con el captcha, intente nuevamente.'] : error.array().map(err => err.msg)});
    }
}
