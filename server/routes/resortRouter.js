import express from 'express';

import controllers from '../controllers/resortController.js';
const { getAllResorts, getResortById, createResort, updateResort, deleteResort, getResortByName } = controllers;

const Router = express.Router();

Router.get('/', getAllResorts);
Router.post('/', createResort);
Router.get('/:id', getResortById);
Router.put('/:id', updateResort);
Router.delete('/:id', deleteResort);
Router.get('/:name', getResortByName);

export default Router;


