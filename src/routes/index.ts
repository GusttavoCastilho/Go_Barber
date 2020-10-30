import { Router } from 'express';

import AppointmentsRoutes from './appointmentsroutes';
import usersRouter from './usersRoutes';
import sessionsRouter from './sessionsRoutes';


const routes = Router();

routes.use('/appointments', AppointmentsRoutes);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
export default routes;
