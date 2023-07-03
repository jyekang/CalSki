import Models from '../models/index.js'
import db from '../db/index.js'
const { Plans } = Models

db.on('error', console.error.bind(console, 'connection error:'));

const main = async () => {

const plans = [
    {
        user: "64a2e28922dbf6cf158beb53",
        resort: "64a2e0a84705f9f6d8539c55",
        date: "2023-07-03",
        comment: "Bear Valley seems to be the best place to stay in."
    }
  ]
  await Plans.deleteMany({})
  await Plans.insertMany(plans)
  console.log(`seeded plans`)
}

const run = async () => {   
    await main()
    db.close()
}

run()