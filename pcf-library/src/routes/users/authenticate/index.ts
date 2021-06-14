import { Request, Response } from 'express';
import authenticate from './authenticate';

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error('Please pass both username and password');
    }

    const authed = await authenticate({ username, password });

    if (!authed) {
      throw new Error('Authentication failed');
    }

    return res.status(200).json({ success: true, authenticated: authed.success, role: authed.role });
  } catch (error) {
    console.error(error.message, null, error.name);
    return res.status(200).json({ success: false, message: error.message });
  }
};
