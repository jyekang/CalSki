import express from 'express';
import planRouter from './plan/Router';
import resortRouter from './resortRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/plan', planRouter);
router.use('/resort', resortRouter);
router.use('/user', userRouter);

export default router;


// import Router from ('express').Router()

// import planRouter from './plan/Router'
// import resortRouter from './resortRouter'
// import userRouter from './userRouter'

// Router.use('/plan', planRouter)
// Router.use('/resort', resortRouter)
// Router.use('/user', userRouter)

// export default Router