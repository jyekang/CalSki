import { Schema } from'mongoose'

const Resort = new Schema (
    {
        resortName: { type: String, required: true },
        region: { type: String, required: true},
        description: { type: String, required: true},
        image: { type: String, required: true },
        verticalRise: { type: Number, required: true },
        baseElevation: { type: Number, required: true},
        summitElevation: { type: Number, required: true},
        numberOfLifts: { type: Number, required: false },
        ticketChild: { type: Number, required: false },
        ticketYouth: { type: Number, required: false },
        ticketAdult: { type: Number, required: false },
        ticketSenior: { type: Number, required: false },
        nearbyResorts: { type: Array, required: true },
        contactAddress: { type: String, required: true },
        contactEmail: { type: String, required: true },
        contactWebsite: { type: String, required: true }
        
    },
    { timestamps: true }
)

export default Resort