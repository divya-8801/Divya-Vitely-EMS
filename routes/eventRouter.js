 import { Router } from 'express';
 const router = Router();

 import {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
 } from '../controllers/eventController.js';
import { validateEventInput, validateIdParam } from '../middleware/validationMiddleware.js';

router.route('/eventform').get(getAllEvents).post(validateEventInput,createEvent);
router
   .route('/eventform/:id')
   .get(validateIdParam, getEvent)
   .patch(validateEventInput,updateEvent)
   .delete(validateIdParam,deleteEvent);

export default router;