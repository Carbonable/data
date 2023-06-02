import { Request, Response, NextFunction } from 'express';

export default (controller) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    console.log(`${request.originalUrl} (${controller.name})`);
    await controller(request, response);
  } catch (err) {
    next(err);
  }
};