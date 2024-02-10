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

// integration test
describe('GET /api',  () => {
  it('should return api basic route 2', async () => {
    const response = await request(app).get('/api/character?search=lu');
    const json1 = JSON.stringify(    [
      { name: 'Luke Skywalker', height: '172', mass: '77', gender: 'male' },
      {
        name: 'Luminara Unduli',
        height: '170',
        mass: '56.2',
        gender: 'female'
      }
    ]);
    const json2 = JSON.stringify(response.body.results);
    expect(response.status).toBe(200);
    expect(response.body.results.length).toBe(2);
    expect(json1).toBe(json2);
  });
});
