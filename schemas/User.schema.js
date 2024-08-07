import mongoose from 'mongoose';
const User = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    checkin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('User', User);