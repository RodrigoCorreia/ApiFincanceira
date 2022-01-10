import { Router } from 'express';
import apiStatusRoute from './apiStatusRoute';

const routes = Router();

routes.use('/', apiStatusRoute);

export default routes;
