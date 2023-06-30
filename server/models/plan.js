import { Schema } from 'mongoose'

const Plan = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        resort: {type: Schema.Types.ObjectId, ref: 'Resort', required: true},
        date: {type: String, required: true},
        comment: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Plan

