
const request = require('supertest');
const app = require('../app')

describe('Test the root path', () => {
  test('endpoint options', async () => {
    const res = await request(app).options('/item')
    expect(res.text).toEqual('POST,PUT,GET,HEAD,DELETE')
  })

  test('It should response the GET method', async () => {
    const res = await request(app)
      .get('/item')

    expect(res.statusCode).toEqual(200)
  });

  test('It should response the POST method', async () => {
    const res = await request(app)
      .post('/item')

    expect(res.statusCode).toEqual(201)
  });

  test('It should response the PUT method', async () => {
    const res = await request(app)
      .put('/item')

    expect(res.statusCode).toEqual(200)
  });

  test('It should response the DELETE method', async () => {
    const res = await request(app)
      .delete('/item')

    expect(res.statusCode).toEqual(200)
  });
})
