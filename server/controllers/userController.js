import User from  '../models/user.js'

const getUsers = async (req, res) => {
    try { const users = await User.find()
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const getUserById = async (req, res) => {
    try { const user = await User.findById(req.params.id)
        if (user) {
            return res.status(200).json({user})
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

const deleteUser = async (req, res) => {
    try { const user = await User.findByIdAndDelete(req.params.id)
        if (user) {
            return res.status(200).json({user})
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

 const createUser = async (req, res) => {
    try { const user = await User.create(req.body)
        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const updateUser = async (req, res) => {
    try { const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if (user) {
            return res.status(200).json({user})
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

export default { getUsers, getUserById, deleteUser, createUser, updateUser }