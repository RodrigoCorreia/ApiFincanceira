import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('ApiStatusRoute', () => {
	it('Should return message that server is on', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Server is running...');
	});
});
