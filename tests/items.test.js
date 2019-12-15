
const request = require('supertest');
const app = require('../app')

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const res = await request(app)
      .get('/item')

    expect(res.statusCode).toEqual(200)
  });
})
