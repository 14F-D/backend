const axios = require('axios')
const url = 'http://localhost:3000'


describe("OK", ()=>{
  test('Base route', async () => {
    const res = await axios.get(url)
    expect(res.status).toBe(200)
    expect(res.data).toEqual({'message':'ok'})
  })
})

describe("POST /api/login  and /api/logout", () => {
  test("should login as standard and return data of user", async () => {
    const res = await axios.post(`${url}/api/login`,{
      username: 'TestStandard123',
      password: 'TestStandard123'
    });
    expect(res.status).toBe(200);
  });
  test("should log out", async () => {
    const res = await axios.post(`${url}/api/logout`);
    expect(res.status).toBe(200);
  });
  test("should login as admin and return data of user", async () => {
    const res = await axios.post(`${url}/api/login`,{
      username: 'TestAdmin123',
      password: 'TestAdmin123'
    });
    expect(res.status).toBe(200);
  });
});
describe("GET /api/users", () => {
  test("should get all user's data if role admin", async () => {
    const res = await axios.get(`${url}/api/users`);
    expect(res.status).toBe(200);
  });
});





// https://codingpr.com/test-your-express-api-with-jest/