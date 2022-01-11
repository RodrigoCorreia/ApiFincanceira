import { Request, Response, Router } from 'express';

const apiStatusRoute = Router();

apiStatusRoute.get('/', (request: Request, response: Response): Response => {
	return response.status(200).json({ message: 'Server is running...' });
});

export default apiStatusRoute;
