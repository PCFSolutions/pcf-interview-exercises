import { Request, Response } from 'express';
import create from './create';

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      throw new Error('Please pass all parameters');
    }

    const user = await create({ username, password, role });
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error.message, null, error.name);
    return res.status(200).json({ success: false, message: error.message });
  }
};
