import Router from ('express').Router()
import controller from '..controllers/planController'

Router.get('/', controller.getPlans)
Router.get('/:id', controller.getPlan)
Router.post('/', controller.createPlan)
Router.put('/:id', controller.updatePlan)
Router.delete('/:id', controller.deletePlan)

export default Router