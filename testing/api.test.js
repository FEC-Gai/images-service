const supertest = require('supertest');
const app = require('../server/index.js');
const request = supertest('app');
const regeneratorRuntime = require("regenerator-runtime");
const data = require('./apiTestData.js');

describe('api test for images endpoints', () => {
  it('should return data from the images endpoint', async () => {
    const response = await request.get('/images');
    expect (response.status).toBe(200);
  });
});