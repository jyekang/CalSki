import { Schema } from'mongoose'

const Resort = new Schema (
    {
        resortName: { type: String, required: true },
        region: { type: String, required: true},
        image: { type: String, required: true },
        verticalRise: { type: Number, required: true },
        baseElevation: { type: Number, required: true},
        summitElevation: { type: Number, required: true},
        numberOfLifts: { type: Number, required: true },
        ticketChild: { type: Number, required: true },
        ticketYouth: { type: Number, required: true },
        ticketAdult: { type: Number, required: true },
        ticketSenior: { type: Number, required: true },
        nearbyResorts: { type: Array, required: true },
        contactAddress: { type: String, required: true },
        contactEmail: { type: String, required: true },
        contactWebsite: { type: String, required: true }
        
    },
    { timestamps: true }
)

export default Resort