import express from 'express';
import controllers from '../controllers/userController.js';
const { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser } = controllers;

const Router = express.Router();

Router.post('/login', loginUser)

Router.get('/', getUsers)
Router.get('/:id', getUserById)
Router.post('/', createUser)
Router.put('/:id', updateUser)
Router.delete('/:id', deleteUser)

export default Router


// import Router from ('express').Router()
// import controller from '..controllers/userController'

// Router.get('/', controller.getUsers)
// Router.get('/:id', controller.getUser)
// Router.post('/', controller.createUser)
// Router.put('/:id', controller.updateUser)
// Router.delete('/:id', controller.deleteUser)

// export default Router