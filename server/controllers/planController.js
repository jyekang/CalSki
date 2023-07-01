import { Plan } from  '../models'

const getPlans = async (req, res) => {
    try { const plans = await Plan.find()
        return res.status(200).json({plans})
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const getPlanById = async (req, res) => {
    try { const plan = await Plan.findById(req.params.id)
        if (plan) {
            return res.status(200).json({plan})
        } else {
            return res.status(404).json({ message: 'Plan not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

const deletePlan = async (req, res) => {
    try { const plan = await Plan.findByIdAndDelete(req.params.id)
        if (plan) {
            return res.status(200).json({plan})
        } else {
            return res.status(404).json({ message: 'Plan not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

 const createPlan = async (req, res) => {
    try { const plan = await Plan.create(req.body)
        return res.status(200).json({plan})
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const updatePlan = async (req, res) => {
    try { const plan = await Plan.findByIdAndUpdate(req.params.id, req.body)
        if (plan) {
            return res.status(200).json({plan})
        } else {
            return res.status(404).json({ message: 'Plan not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

export default { getPlans, getPlanById, deletePlan, createPlan, updatePlan }