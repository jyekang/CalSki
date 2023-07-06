import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const User = new Schema(
    {
        username: {
            type: String,
            // required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            // validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        },
        email: {
            type: String,
            // required: true,
            unique: true,
            // validate: /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/
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

//static signup method
User.statics.signup = async function(username, password, email) {
    const exists = await this.findOne({ email });
    if (exists) {
        throw new Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const User = await this.create({ email, username, password: hashed });

    return User;
};

export default User;