import { Schema } from'mongoose'

const WebsiteReview = new Schema(
    {
        userName: {type: String, ref: 'User'},
        comment: {type: String, required: true}
    },
    { timestamps: true }
)

export default WebsiteReview
