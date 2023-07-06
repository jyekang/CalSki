import models from '../models/index.js'
const { Users } = models

const getUsers = async (req, res) => {
    try { const users = await Users.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const getUserById = async (req, res) => {
    try { const user = await Users.findById(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

const deleteUser = async (req, res) => {
    try { const user = await Users.findByIdAndDelete(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

 const createUser = async (req, res) => {
    try { const user = await Users.create(req.body)
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
        }
}

const updateUser = async (req, res) => {
    try { const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
            }
}

//login user
  const loginUser = async (req, res) => {
  res.json({mssg: "login user"})

//   try {
//     const user = await Users.findOne({ username, password });
//     if (user) {
//       return res.status(200).json({ message: 'Login successful', user });
//     } else {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
  }


//signup user   
const signupUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await Users.signup(email, password)
        res.status(200).json({ email, user})
        } catch (error) {
        return res.status(400).json({ error: error.message })
        }
   
}

export default { getUsers, getUserById, deleteUser, createUser, updateUser, loginUser, signupUser }