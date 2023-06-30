import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

mongoose
    .connect(`mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@calski.lyliq7c.mongodb.net/`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

export default db