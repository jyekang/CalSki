import mongoose from "mongoose";
import User from "./user.js";
import Plan from "./plan.js";
import Resort from "./resort.js";
import WebsiteReview from "./websiteReview.js";

const Users = mongoose.model("Users", User);
const Plans = mongoose.model("Plans", Plan);
const Resorts = mongoose.model("Resorts", Resort);
const WebsiteReviews = mongoose.model("websiteReviews", WebsiteReview);

export default { Users, Plans, Resorts, WebsiteReviews };