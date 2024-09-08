import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true        
    }
});

export const User = mongoose.model("User", UserSchema);
