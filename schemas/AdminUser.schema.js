import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('AdminUser', AdminUserSchema);