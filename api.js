const axios = require('axios');


async function fetchData() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
}

module.exports = fetchData;

