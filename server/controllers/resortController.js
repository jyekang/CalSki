import models from '../models/index.js'
const { Resorts } = models


const getAllResorts = async (req, res) => {
    try {
        const resorts = await Resorts.find()
        return res.status(200).json( resorts )
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const createResort = async (req, res) => {
    try {
        const resort = await new Resorts(req.body)
        await resort.save()
        return res.status(200).json({ resort })
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



const getResortById = async (req, res) => {
    try {
            const resortId = req.params.id;
            const resort = await Resorts.findById(resortId)
            if (resort) {
                return res.status(200).json({ resort });
            }
            return res.status(404).send('Resort with the specified ID does not exists');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }


const updateResort = async (req, res) => {
    try {
            const resortId = req.params.id;
            const resort = await Resorts.findByIdAndUpdate(resortId, req.body, { new: true })
            if (resort) {
                return res.status(200).json({ resort });
            }
            return res.status(404).send('Resort with the specified ID does not exists');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

const deleteResort = async (req, res) => {
    try {
            const resortId = req.params.id;
            const deleted = await Resorts.findByIdAndDelete(resortId)
            if (deleted) {
                return res.status(200).send("Resort deleted");
            }
            throw new Error("Resort not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }


export default {
    getAllResorts,
    createResort,
    getResortById,
    updateResort,
    deleteResort
}

