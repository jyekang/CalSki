import Router from ('express').Router()
import controller from '..controllers/planController'

Router.get('/', controller.getUsers)
Router.get('/:id', controller.getUser)
Router.post('/', controller.createUser)
Router.put('/:id', controller.updateUser)
Router.delete('/:id', controller.deleteUser)

export default Router