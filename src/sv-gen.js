// generator version of nightmare
const nightmare = require('nightmare')({ show: true });
const co = require('co');
const { BASE_URL } = require('./config');

function* getToken(nm) {
  const tokenCookie = yield nm.goto(BASE_URL).cookies.get({ name: 'csrftoken' });
  const { value: token } = tokenCookie;
  return token;
}

function* getHeaders(nm) {
  const headers = yield nm.goto(BASE_URL);
  return headers;
}

function* run(nm) {
  const token = yield getToken(nm);
  const headers = yield getHeaders(nm);
  yield nm.end();
  return { token, headers };
}

co.wrap(run)(nightmare)
  .then(res => {
    console.log('got response! ========');
    console.log(res);
  });
