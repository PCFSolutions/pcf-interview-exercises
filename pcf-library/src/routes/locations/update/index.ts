import { Request, Response } from 'express';
import update from './update';

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id, name } = req.body;

    if (!id) {
      throw new Error('Please provide all required parameters');
    }

    const location = await update({ id, name });
    return res.status(200).json({ success: true, location });
  } catch (error) {
    console.error(error.message, null, error.name);
    return res.status(200).json({ success: false, message: error.message });
  }
};
