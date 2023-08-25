const request = require('supertest');
const app = require('../app');

describe("Api Test", () => {
  test("first test", async () => {
      const response = await request(app).get("/users");

      expect(response.status).toBe(200);
  });
});
