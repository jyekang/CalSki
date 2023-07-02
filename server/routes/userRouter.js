import express from 'express';
const Router = express.Router();

import controller from '../controllers/userController.js'

Router.get('/', controller.getUsers)
Router.get('/:id', controller.getUserById)
Router.post('/', controller.createUser)
Router.put('/:id', controller.updateUser)
Router.delete('/:id', controller.deleteUser)

export default Router


// import Router from ('express').Router()
// import controller from '..controllers/userController'

// Router.get('/', controller.getUsers)
// Router.get('/:id', controller.getUser)
// Router.post('/', controller.createUser)
// Router.put('/:id', controller.updateUser)
// Router.delete('/:id', controller.deleteUser)

// export default Router