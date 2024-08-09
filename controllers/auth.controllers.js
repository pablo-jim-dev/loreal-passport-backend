
import User from "../schemas/AdminUser.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "El usuario no ha sido encontrado. Inténtalo de nuevo." });
    }
    if (password !== user.password) {
        console.log(password, user.password);
        
        return res.status(403).json({ message: "La contraseña es incorrecta. Inténtalo de nuevo." });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.status(200).json({ message: "Usuario logueado", token });
}