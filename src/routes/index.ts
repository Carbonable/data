
import { Router, Request, Response  } from 'express';

import controller from '../controllers/index';

import handler from '../handlers/index';

const router = Router();

router.route('/:id').get(handler(controller.get));


// API 404
router.use((_request: Request, response: Response) => {
  response.status(404).send('404');
});

export default router;