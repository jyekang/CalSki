import mongoose from "mongoose";
import userSchema from "user";
import planSchema from "plan";
import resortSchema from "resort";

const Users = mongoose.model("Users", userSchema);
const Plans = mongoose.model("Plans", planSchema);
const Resorts = mongoose.model("Resorts", resortSchema);

export default { Users, Plans, Resorts };