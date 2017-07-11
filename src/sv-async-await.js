// async-await version of nightmare
const nightmare = require('nightmare')({ show: true });
const { BASE_URL } = require('./config');

async function getToken(nm) {
  const tokenCookie = await nm.goto(BASE_URL).cookies.get({ name: 'csrftoken' });
  const { value: token } = tokenCookie;
  return token;
}

async function getHeaders(nm) {
  const headers = await nm.goto(BASE_URL);
  return headers;
}

async function run(nm) {
  const token = await getToken(nm);
  const headers = await getHeaders(nm);
  await nm.end();
  return { token, headers };
}

run(nightmare)
  .then(res => console.log(res));
