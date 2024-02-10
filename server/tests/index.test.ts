import request from 'supertest';
import { app } from '../index';


describe('GET /',  () => {
  it('should return get from basic route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('May the force be with you!');
  });
});


describe('GET /api',  () => {
  it('should return api basic route', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.text).toBe('API main routes');
  });
});
