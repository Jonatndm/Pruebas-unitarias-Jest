const fetchData = require('../api');
const axios = require('axios');

jest.mock('axios');

test('fetchData retorna los datos corrects', async () => {
  const mockData = { title: 'Test Post' };
  axios.get.mockResolvedValue({ data: mockData});

  const data = await fetchData();
  expect(data.title).toBe('Test Post');
})