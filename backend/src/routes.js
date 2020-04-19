import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/UserControllers/SessionController';
import RecipietnsController from './app/controllers/UserControllers/RecipientController';
import DeliverymanController from './app/controllers/UserControllers/DeliverymanController';
import OrderController from './app/controllers/UserControllers/OrderController';
import FileController from './app/controllers/UserControllers/FileController';
import CancelOrderController from './app/controllers/UserControllers/CancelOrderController';

import DeliverymanSessionController from './app/controllers/DeliverymanControllers/DeliverymanSessionController';
import DeliverymanDeliveriesController from './app/controllers/DeliverymanControllers/DeliveriesController';
import DeliverymanStartDeliveryController from './app/controllers/DeliverymanControllers/StartDeliveryController';
import DeliverymanFinishDeliveryController from './app/controllers/DeliverymanControllers/FinishDeliveryController';
import SignatureController from './app/controllers/DeliverymanControllers/SignatureController';
import DeliverymanProblemController from './app/controllers/DeliverymanControllers/ProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);
routes.post('/deliveryman/session', DeliverymanSessionController.store);

routes.get(
  '/deliveryman/:id/deliveries',
  DeliverymanDeliveriesController.index
);

routes.put(
  '/deliveryman/:id/deliveries/:orderId/finish',
  DeliverymanFinishDeliveryController.update
);

routes.put(
  '/deliveryman/:id/deliveries/:orderId/start',
  DeliverymanStartDeliveryController.update
);

routes.post('/delivery/:id/problems', DeliverymanProblemController.store);
routes.get('/delivery/problems', DeliverymanProblemController.index);

routes.post('/signatures', upload.single('file'), SignatureController.store);

routes.use(authMiddleware);

routes.get('/recipients', RecipietnsController.index);
routes.post('/recipients', RecipietnsController.store);
routes.put('/recipients/:id', RecipietnsController.update);
routes.delete('/recipients/:id', RecipietnsController.delete);

routes.get('/deliverymen', DeliverymanController.index);
routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

routes.delete('/problem/:id/cancel-delivery', CancelOrderController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
