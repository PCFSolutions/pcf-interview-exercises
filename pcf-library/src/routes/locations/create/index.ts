import { Request, Response } from 'express';
import create from './create';

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;

    if (!name) {
      throw new Error('Please provide all required parameters');
    }

    const result = await create({ name });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message });
  }
};
