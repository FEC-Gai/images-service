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

/*
it('should return the photo object corresponding to the roomId in the response', async () => {
    const response = await request.get('/images/:roomId');
    const photoObj = response.body;
    expect(photoObj).toHaveProperty('room_id');
    expect(photoObj).toHaveProperty('title');
    expect(photoObj).toHaveProperty('room_photos');
    expect(photoObj).toHaveProperty('host_image');
    expect(photoObj).toHaveProperty('reviewers');
    expect(photoObj).toHaveProperty('rating');
    expect(photoObj).toHaveProperty('review_count');
    expect(photoObj).toHaveProperty('is_super_host');
  });
*/