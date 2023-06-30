import { Plan } from  '../models'

const getPlans = async (req, res) => {
   try { const plans = await Plan.find()
    return res.status(200).json({plans})
} catch (error) {
    return res.status(500).json({ message: error.message })
    }
}


export default { getPlans }