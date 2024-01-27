import express, { Router, Request, Response } from 'express';
import characterRoute from './characterRoute';

const router: Router = express.Router();

router.use('/api/character', characterRoute);

router.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'API main routes' });
  });

export default router;

