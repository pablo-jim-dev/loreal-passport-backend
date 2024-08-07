import data from '../data.js'
import AdminUsers from '../AdminUsers.js'
import User from '../schemas/User.schema.js'
import AdminUser from '../schemas/AdminUser.schema.js'

const createUsers = async () => {
    try {
        if (await User.countDocuments() > 0) return;
        await User.insertMany(
            data.map(user => ({
                userId: user.userId,
                username: user.name,
                checkin: false,
            }))
        );
        if (await AdminUser.countDocuments() > 0) return;
        await AdminUser.insertMany(
            AdminUsers.map(user => ({
                username: user.username,
                password: user.password
            }))
        );

        console.log('All Users created successfully')
    } catch (error) {
        console.error(error)
    }
}

export default createUsers;