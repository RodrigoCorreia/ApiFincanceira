import { Request, Response, Router } from 'express';

const apiStatusRoute = Router();

apiStatusRoute.get('/', (request: Request, response: Response): Response => {
	return response.json({ message: 'Server is running...' });
});

export default apiStatusRoute;
