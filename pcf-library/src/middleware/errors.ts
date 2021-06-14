import { Request, Response, NextFunction } from 'express';

// Express error handlers MUST have 4 params, so don't warn us about
// next being unused.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errors = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.message);
  res.status(500).json({ success: false, message: err.message });
};

export default errors;
