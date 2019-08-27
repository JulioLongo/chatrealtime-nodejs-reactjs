import { Router } from 'express';

import ChatController from './app/controllers/ChatController';

const routes = new Router();

routes.get('/chat', ChatController.index);
routes.post('/chat/:usuario', ChatController.store);

export default routes;
