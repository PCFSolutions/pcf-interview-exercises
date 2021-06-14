import express from 'express';
import users from './routes/users';
import locations from './routes/locations';
import errors from './middleware/errors';

const router = express.Router();

router.use(errors);

router.post('/auth', users.authenticate);
router.post('/users/create', users.create);

router.post('/locations/create', locations.create);
router.post('/locations/update', locations.update);

export default router;
