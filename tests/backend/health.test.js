import request from 'supertest';
import app from '../../backend/server.js';

test('health check', async () => {
  const res = await request(app).get('/api/health').set('x-betterbets-key','test');
  expect(res.status).toBe(200);
});
