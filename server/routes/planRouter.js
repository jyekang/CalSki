// import express from 'express';
// import {getPlans, getPlanById, deletePlan, createPlan, updatePlan} from '`../controllers/planController`

// const router = express.Router();

// router.get('/getPlans', controller.getPlans);
// router.get('/getPlans/:id', controller.getPlans);
// router.post('/getAllResorts', controller.createPlan);
// router.put('/:id', controller.updatePlan);
// router.delete('/getPlans/:id', controller.deletePlan);

// export default router;


import express from 'express';
import controller from '../controllers/planController.js'
const Router = express.Router();

Router.get('/', controller.getPlans)
Router.get('/:id', controller.getPlanById)
Router.post('/', controller.createPlan)
Router.put('/:id', controller.updatePlan)
Router.delete('/:id', controller.deletePlan)

export default Router