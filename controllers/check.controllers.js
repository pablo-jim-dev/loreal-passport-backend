import User from '../schemas/User.schema.js'
import createUsers from '../lib/init.js'

export const checkUser = async (req, res) => {
    const { userId } = req.body;
    console.log("Checking user: ", userId);

    const searchUser = await User.findOne({
        userId: userId
    });

    console.log("User found: ", searchUser.username);

    if (!searchUser) return res.status(404).json({ message: 'Usuario no encontrado.' });
    if (searchUser.checkin) return res.status(200).json({ message: 'Ya ha realizado su checkin.' });

    searchUser.checkin = true;

    searchUser.save();
    res.status(200).json({ message: `${searchUser.username} ha realizado su CheckIn.` });
}

export const listCheck = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const resetDatabase = async (req, res) => {
    const { username, password } = req.body;
    console.log("username: ", username);
    console.log("password: ", password);
    
    const adminUser = {
        username: "admin10",
        password: "passwordMesa2425"
    }
    if (adminUser.username !== username || adminUser.password !== password) return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });

    await User.deleteMany();

    await createUsers();
    res.status(200).json({ message: 'Base de datos reseteada.' });
}