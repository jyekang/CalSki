import { Schema } from "mongoose";

const User = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/
        },
        favResorts: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
);

export default User;