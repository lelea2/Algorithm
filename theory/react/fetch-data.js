const axios = require('axios');

async function asyncFetch() {
  try {
    const resp = await axios.get('https://randomuser.me/api');
    const { data } = resp;
    console.log(data);
    return data;
  } catch(ex) {
    console.log(ex);
  }
}

asyncFetch().then(data => {
  console.log('>>>>> data', data);
  console.log(data.results[0].gender);
});