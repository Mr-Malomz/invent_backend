import { Request, Response } from 'express';

export const getAllCompany = (req: Request, res: Response) => {
	res.send(['Oando', 'Agip', 'Exxon Mobil']);
};
