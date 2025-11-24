import request from 'supertest';
import app from '../../backend/server.js';

test('odds returns array', async () => {
  const res = await request(app).get('/api/odds').set('x-betterbets-key','test');
  expect(Array.isArray(res.body.games)).toBe(true);
});
